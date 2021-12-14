import {
  createContext,
  useState,
  useRef,
  useEffect,
  memo,
  useMemo,
} from 'react';

import { io } from 'socket.io-client';
import Peer from 'simple-peer';

import { ContextType, ICall } from 'common/providers/Interfaces';

import { toast } from 'react-toastify';

const SocketContext = createContext<ContextType | undefined>(undefined);

const socket = io('http://localhost:5000');

const ContextProvider = memo(({ children }:{ children: React.ReactNode }): JSX.Element => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [name, setName] = useState('');
  const [call, setCall] = useState<ICall>();
  const [me, setMe] = useState('');

  const myVideo = useRef<{srcObject: MediaStream }>();
  const userVideo = useRef<{srcObject: MediaStream }>();
  const connectionRef = useRef<Peer.Instance>();

  const toastError = (message: string): void => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  console.log(stream);
  console.log(stream?.getVideoTracks()[0]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }
      }).catch((error) => {
        toastError(`To use this app you need to grand access to your camera and microphone ${error}`);
      });

    socket.on('error', (error) => {
      toastError(`An error occurred. ${error}`);
    });

    socket.on('connect_failed', (error) => {
      toastError(`Connection failed. ${error}`);
    });

    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({
        isReceivingCall: true, from, name: callerName, signal,
      });
    });
  }, []);

  const answerCall = (): void => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data: Peer.SignalData) => {
      socket.emit('answerCall', { signal: data, to: call?.from });
    });

    peer.on('stream', (currentStream: MediaStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream;
      }
    });

    peer.signal(call?.signal as Peer.SignalData);

    connectionRef.current = peer;
  };

  const callUser = (id: string): void => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data: Peer.SignalData) => {
      socket.emit('callUser', {
        userToCall: id, signalData: data, from: me, name,
      });
    });

    peer.on('stream', (currentStream: MediaStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream;
      }
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = (): void => {
    setCallEnded(true);

    if (connectionRef.current) {
      connectionRef.current.destroy();
    }

    window.location.reload();
  };

  const value = useMemo(
    () => ({
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      setStream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }),
    [
      call, callAccepted, myVideo, userVideo, stream, name, callEnded, me,
    ],
  );

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
});

export { ContextProvider, SocketContext };
