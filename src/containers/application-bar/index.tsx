import { memo } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

const ApplicationBar = function (): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Banuba task app</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default memo(ApplicationBar);
