import { memo } from 'react';

import { useConnection } from 'common/providers/hooks/useConnection';
import { Button } from '@mui/material';

import { TEXT } from 'containers/main-page/utils/constants';

import { NotificationStyled } from 'containers/main-page/utils/styled';

const Notification = function (): JSX.Element {
  const { answerCall, call, callAccepted } = useConnection();

  return (
    <div>
      {call?.isReceivingCall && !callAccepted && (
        <NotificationStyled>
          <h2>{`${TEXT.RECEIVING} ${call.name}:`}</h2>
          <Button variant="contained" color="primary" onClick={answerCall}>
            {TEXT.BUTTONS.ANSWER}
          </Button>
        </NotificationStyled>
      )}
    </div>
  );
};

export default memo(Notification);
