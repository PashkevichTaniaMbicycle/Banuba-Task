import { memo, useRef } from 'react';

import { useBanubaContext } from 'common/providers/hooks/useBanubaContext';
import { useRenderBanuba } from 'common/Banuba/utils/BanubaUtils';

import Paper from '@mui/material/Paper';
import Name from 'containers/main-page/VideoPlayer/Name';

import { VideoWrapper } from 'containers/main-page/utils/styled';

const MyVideo = function (): JSX.Element {
  const meVideoRef = useRef<HTMLDivElement | null>(null);

  const { player } = useBanubaContext();
  useRenderBanuba(meVideoRef.current, player);

  return (
    <VideoWrapper item xs={12} md={6}>
      <Paper>
        <Name />
        <div ref={meVideoRef} />
      </Paper>
    </VideoWrapper>
  );
};

export default memo(MyVideo);
