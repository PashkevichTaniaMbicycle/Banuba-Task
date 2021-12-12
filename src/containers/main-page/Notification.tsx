import {
  ChangeEvent, memo, useState,
} from 'react';
import { useConnection } from 'common/providers/hooks/useConnection';
import {
  Button, Container, Grid, Paper, TextField, Typography,
} from '@mui/material';
import { Phone, PhoneDisabled } from '@mui/icons-material';

const Notification = function ({ children }:{ children: React.ReactNode }): JSX.Element {
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

  return (
    <Container>
      <Paper elevation={10}>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={onNameChange} fullWidth />
              <Typography gutterBottom variant="h6">Your ID:</Typography>
              <TextField label="ID" value={me} disabled fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={onIDToCallChange} fullWidth />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default memo(Notification);
