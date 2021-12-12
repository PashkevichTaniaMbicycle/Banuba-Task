import VideoPlayer from 'containers/main-page/VideoPlayer';
import Options from 'containers/main-page/Options';
import Notification from 'containers/main-page/Notification';

export const MainPage = function ():JSX.Element {
  return (
    <>
      <VideoPlayer />
      <Notification>
        <Options />
      </Notification>
    </>
  );
};
