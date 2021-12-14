import { ChangeEvent, memo, useState } from 'react';

import { useConnection } from 'common/providers/hooks/useConnection';

import {
  Button,
  Container, IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Phone, PhoneDisabled, ContentCopy } from '@mui/icons-material';

import { TEXT } from 'containers/main-page/utils/constants';

import { OptionsItem, OptionsWrapper } from 'containers/main-page/utils/styled';
import { toast } from 'react-toastify';

const Options = function ({ children }:{ children: React.ReactNode }): JSX.Element {
  const {
    name, callUser, callAccepted, leaveCall, callEnded, setName, me,
  } = useConnection();
  const [idToCall, setIdToCall] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setName(e.target.value);
  };

  const onIDToCallChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setIdToCall(e.target.value);
  };

  const copyHandler = ():void => {
    navigator.clipboard.writeText(me);
    toast.success('🦄 Copied your ID!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const copyButton = <IconButton color="primary" onClick={copyHandler}><ContentCopy /></IconButton>;

  return (
    <Container>
      <Paper elevation={10}>
        <form noValidate autoComplete="off">
          <OptionsWrapper container>
            <OptionsItem item xs={12} md={6}>
              <Typography gutterBottom variant="h6">{TEXT.ACCOUNT_INFO}</Typography>
              <TextField
                label="Name"
                value={name}
                onChange={onNameChange}
                fullWidth
              />
              <Typography gutterBottom variant="h6">{TEXT.YOUR_ID}</Typography>
              <TextField
                label="ID"
                value={me}
                disabled
                fullWidth
                InputProps={{
                  endAdornment: copyButton,
                }}
              />
            </OptionsItem>
            <OptionsItem item xs={12} md={6}>
              <Typography gutterBottom variant="h6">{TEXT.MAKE_A_CALL}</Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={onIDToCallChange}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                  sx={{ mt: '10px' }}
                >
                  {TEXT.BUTTONS.HANG_UP}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  sx={{ mt: '10px' }}
                >
                  {TEXT.BUTTONS.CALL}
                </Button>
              )}
            </OptionsItem>
            <OptionsItem item xs={12} md={12}>
              {children}
            </OptionsItem>
          </OptionsWrapper>
        </form>
      </Paper>
    </Container>
  );
};

export default memo(Options);
