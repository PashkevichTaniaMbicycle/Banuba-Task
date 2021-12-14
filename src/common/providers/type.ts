import { Effect, Player, Webcam } from 'common/Banuba/SDK/BanubaSDK';

export type BanubaContextType = { blurEffect: Effect | null; webcam: Webcam | null; player: Player | null }
