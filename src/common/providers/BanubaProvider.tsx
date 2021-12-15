import {
  createContext,
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Effect, Player, Webcam } from 'common/Banuba/SDK/BanubaSDK';

import { notifyError } from 'common/notify';

import { BanubaContextType } from 'common/providers/type';

const BanubaContext = createContext<BanubaContextType | undefined>(undefined);

const BanubaProvider = memo(({ children }:{ children: React.ReactNode }): JSX.Element => {
  const [webcam, setWebcam] = useState<Webcam |null>(null);
  const [blurEffect, setBlurEffect] = useState<Effect |null>(null);
  const [player, setPlayer] = useState<Player |null>(null);

  console.log(process.env.REACT_APP_BANUBA_KEY);

  useEffect(() => {
    const w = new Webcam();
    setWebcam(w);
    (async () => {
      try {
        const p = await Player.create({
          clientToken: process.env.REACT_APP_BANUBA_KEY as string,
          locateFile: {
            'BanubaSDK.wasm': 'webar/BanubaSDK.wasm',
            'BanubaSDK.simd.wasm': 'webar/BanubaSDK.simd.wasm',
            'BanubaSDK.data': 'webar/BanubaSDK.data',
          },
        });
        setPlayer(p);
        p.use(w);

        const blur = await Effect.preload('webar/BlurBG.zip');
        setBlurEffect(blur);
      } catch (e) {
        notifyError(`Something went wrong: ${JSON.stringify(e)}`);
        console.log(e);
      }
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
