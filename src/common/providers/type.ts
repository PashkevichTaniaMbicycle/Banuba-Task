import { Effect, Player, Webcam } from 'common/Banuba/SDK/BanubaSDK';
import { ICall } from 'common/providers/Interfaces';

export type BanubaContextType = { blurEffect: Effect | null; webcam: Webcam | null; player: Player | null }

export type ContextType = {
  call: ICall | undefined,
  callAccepted: boolean,
  userVideo: React.MutableRefObject<{srcObject: MediaStream} | React.LegacyRef<HTMLVideoElement> | undefined>,
  stream: MediaStream | undefined,
  setStream: React.Dispatch<React.SetStateAction<MediaStream | undefined>>,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  callEnded: boolean,
  me: string,
  callUser: (id: string) => void,
  leaveCall: () => void,
  answerCall: () => void,
}
