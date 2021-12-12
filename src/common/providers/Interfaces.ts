import Peer from 'simple-peer';

export interface ICall{
  signal: Peer.SignalData,
  from: string,
  isReceivingCall: boolean,
  name: string,
}

export type ContextType = {
  call: ICall | undefined,
  callAccepted: boolean,
  myVideo: React.MutableRefObject<{srcObject: MediaStream} | React.LegacyRef<HTMLVideoElement> | undefined>,
  userVideo: React.MutableRefObject<{srcObject: MediaStream} | React.LegacyRef<HTMLVideoElement> | undefined>,
  stream: MediaStream | undefined,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  callEnded: boolean,
  me: string,
  callUser: (id: string) => void,
  leaveCall: () => void,
  answerCall: () => void,
}
