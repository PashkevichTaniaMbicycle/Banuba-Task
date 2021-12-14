import { styled } from '@mui/material/styles';

import { Container, Grid } from '@mui/material';

export const MainWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(16),
  padding: theme.spacing(4),
  overflow: 'auto',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const BoxStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const MainVideosWrapperStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const VideosWrapper = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
}));

export const VideoWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
}));

export const VideoStyled = styled('video')({
  width: '100%',
});

export const OptionsWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const OptionsItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
}));

export const NotificationStyled = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  '&>.MuiButton-root': {
    maxHeight: '40px',
  },
});
