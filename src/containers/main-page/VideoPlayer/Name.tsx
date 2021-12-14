import { memo } from 'react';

import { Typography } from '@mui/material';

import { useConnection } from 'common/providers/hooks/useConnection';

const Name = function (): JSX.Element {
  const { name } = useConnection();
  return (
    <Typography variant="h5" gutterBottom>
      {'Me: '}
      { name || ' Name'}
    </Typography>
  );
};

export default memo(Name);
