import { LegacyRef, memo } from 'react';

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { useConnection } from 'common/providers/hooks/useConnection';

import { VideoStyled, VideosWrapper, VideoWrapper } from 'containers/main-page/utils/styled';

const VideoPlayer = function (): JSX.Element {
  const {
    name, callAccepted, myVideo, userVideo, callEnded, stream, call,
  } = useConnection();

  return (
    <VideosWrapper container>
      {stream && (
        <VideoWrapper item xs={12} md={6}>
          <Paper>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <VideoStyled playsInline muted ref={myVideo as LegacyRef<HTMLVideoElement>} autoPlay />
          </Paper>
        </VideoWrapper>
      )}
      {callAccepted && !callEnded && (
        <VideoWrapper item xs={12} md={6}>
          <Paper>
            <Typography variant="h5" gutterBottom>{call?.name || 'Name'}</Typography>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <VideoStyled playsInline ref={userVideo as LegacyRef<HTMLVideoElement>} autoPlay />
          </Paper>
        </VideoWrapper>
      )}
    </VideosWrapper>
  );
};

export default memo(VideoPlayer);
