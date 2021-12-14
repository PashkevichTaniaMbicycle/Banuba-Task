import { memo, useEffect, useState } from 'react';

import { Button } from '@mui/material';

import { BlurUnblurVideo } from 'common/Banuba/hooks/useBanuba';
import { useBanubaContext } from 'common/providers/hooks/useBanubaContext';
import { useConnection } from 'common/providers/hooks/useConnection';
import { MediaStreamCapture } from 'common/Banuba/SDK/BanubaSDK';

const BlurButton = function (): JSX.Element {
  const { player, blurEffect } = useBanubaContext();
  const { stream, setStream } = useConnection();
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    BlurUnblurVideo(player, blurEffect, isBlur);
    if (player && stream) {
      const capture = new MediaStreamCapture(player);

      console.log(capture);
      console.log(capture.getVideoTrack());
      const newStream = new MediaStream([stream.getAudioTracks()[0], capture.getVideoTrack()]);
      console.log(newStream);
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
