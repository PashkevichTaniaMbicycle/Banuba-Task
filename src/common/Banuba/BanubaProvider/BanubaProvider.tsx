import {
  createContext, memo, useEffect, useMemo, useState,
} from 'react';

import { Effect, Player, Webcam } from 'common/Banuba/SDK/BanubaSDK';

const BanubaContext = createContext<{ blurEffect: Effect | null; webcam: Webcam | null; player: Player | null } | undefined>(undefined);

const BanubaProvider = memo(({ children }:{ children: React.ReactNode }): JSX.Element => {
  const [webcam, setWebcam] = useState<Webcam |null>(null);
  const [blurEffect, setBlurEffect] = useState<Effect |null>(null);
  const [player, setPlayer] = useState<Player |null>(null);

  useEffect(() => {
    const w = new Webcam();
    setWebcam(w);
    (async () => {
      const p = await Player.create({
        clientToken: process.env.REACT_APP_BANUBA_KEY as string,
        locateFile: {
          'BanubaSDK.wasm': 'webar/BanubaSDK.wasm',
          'BanubaSDK.data': 'webar/BanubaSDK.data',
        },
      });
      setPlayer(p);
      p.use(w);

      const blur = await Effect.preload('webar/BlurBG.zip');
      setBlurEffect(blur);
    })();

    return () => {
      w.stop();
    };
  }, []);

  const value = useMemo(
    () => ({ player, webcam, blurEffect }),
    [blurEffect, player, webcam],
  );

  return (
    <BanubaContext.Provider value={value}>
      {children}
    </BanubaContext.Provider>
  );
});

export { BanubaProvider, BanubaContext };
