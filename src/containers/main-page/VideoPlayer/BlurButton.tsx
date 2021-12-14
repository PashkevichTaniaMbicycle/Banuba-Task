import { memo, useEffect, useState } from 'react';

import { Button } from '@mui/material';

import { MediaStreamCapture } from 'common/Banuba/SDK/BanubaSDK';

import { BlurUnblurVideo } from 'common/Banuba/hooks/useBanuba';
import { useBanubaContext } from 'common/providers/hooks/useBanubaContext';
import { useConnection } from 'common/providers/hooks/useConnection';

const BlurButton = function (): JSX.Element {
  const { player, blurEffect } = useBanubaContext();
  const { stream, setStream } = useConnection();
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    BlurUnblurVideo(player, blurEffect, isBlur);
    if (player && stream) {
      const capture = new MediaStreamCapture(player);
      const audio = stream.getAudioTracks()[0];
      const video = capture.getVideoTrack();
      const newStream = new MediaStream([audio, video]);
      setStream(newStream);
    }
  }, [blurEffect, isBlur, player]);

  const onBlurClick = ():void => {
    setIsBlur(!isBlur);
  };

  return (
    <Button onClick={onBlurClick}>{isBlur ? 'unblur' : 'blur'}</Button>
  );
};

export default memo(BlurButton);
