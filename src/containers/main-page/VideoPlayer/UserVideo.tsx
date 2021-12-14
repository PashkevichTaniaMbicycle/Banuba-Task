import { LegacyRef, memo } from 'react';
import { useConnection } from 'common/providers/hooks/useConnection';
import { VideoStyled, VideoWrapper } from 'containers/main-page/utils/styled';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const UserVideo = function (): JSX.Element {
  const {
    callAccepted,
    userVideo,
    callEnded,
    call,
  } = useConnection();

  return (
    <VideoWrapper item xs={12} md={6}>
      {callAccepted && !callEnded && (
        <Paper>
          <Typography variant="h5" gutterBottom>
            {'Peer: '}
            { call?.name || ' Name'}
          </Typography>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <VideoStyled playsInline ref={userVideo as LegacyRef<HTMLVideoElement>} autoPlay />
        </Paper>
      )}
    </VideoWrapper>
  );
};

export default memo(UserVideo);
