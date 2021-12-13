import { memo, useEffect, useState } from 'react';

import { Button } from '@mui/material';

import { BlurUnblurVideo } from 'common/Banuba/hooks/useBanuba';
import { useBanubaContext } from 'common/Banuba/BanubaProvider/hook/useBanubaContext ';

const BlurButton = function (): JSX.Element {
  const { player, blurEffect } = useBanubaContext();
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    BlurUnblurVideo(player, blurEffect, isBlur);
  }, [blurEffect, isBlur, player]);

  const onBlurClick = ():void => {
    setIsBlur(!isBlur);
  };

  return (
    <Button onClick={onBlurClick}>{isBlur ? 'unblur' : 'blur'}</Button>
  );
};

export default memo(BlurButton);
