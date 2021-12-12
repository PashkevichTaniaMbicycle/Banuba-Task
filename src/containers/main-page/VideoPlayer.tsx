import { LegacyRef, memo } from 'react';

import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { useConnection } from 'common/providers/hooks/useConnection';

const VideoPlayer = function (): JSX.Element {
  const {
    name, callAccepted, myVideo, userVideo, callEnded, stream, call,
  } = useConnection();

  return (
    <Grid container>
      {stream && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo as LegacyRef<HTMLVideoElement>} autoPlay />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call?.name || 'Name'}</Typography>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video playsInline ref={userVideo as LegacyRef<HTMLVideoElement>} autoPlay />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default memo(VideoPlayer);
