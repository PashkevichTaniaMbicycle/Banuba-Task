import { memo } from 'react';
import { useConnection } from 'common/providers/hooks/useConnection';
import { Button } from '@mui/material';

const Options = function (): JSX.Element {
  const { answerCall, call, callAccepted } = useConnection();

  return (
    <div>
      {call?.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h2>
            {call.name}
            {' '}
            is calling:
          </h2>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(Options);
