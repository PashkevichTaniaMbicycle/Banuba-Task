import VideoPlayer from 'containers/main-page/VideoPlayer/VideoPlayer';
import Options from 'containers/main-page/Options';
import Notification from 'containers/main-page/Notification';

import { useConnection } from 'common/providers/hooks/useConnection';

import { TEXT } from 'containers/main-page/utils/constants';

import { BoxStyled, MainWrapper } from 'containers/main-page/utils/styled';

export const MainPage = function ():JSX.Element {
  const { me } = useConnection();

  return (
    <MainWrapper>
      {me
        ? (
          <div>
            <VideoPlayer />
            <Options>
              <Notification />
            </Options>
          </div>
        )
        : <BoxStyled>{TEXT.CONNECTING}</BoxStyled>}
    </MainWrapper>
  );
};
