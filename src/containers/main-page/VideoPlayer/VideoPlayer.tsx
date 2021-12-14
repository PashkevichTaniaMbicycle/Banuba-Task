import { memo } from 'react';

import UserVideo from 'containers/main-page/VideoPlayer/UserVideo';
import MyVideo from 'containers/main-page/VideoPlayer/MyVideo';
import BlurButton from 'containers/main-page/VideoPlayer/BlurButton';

import { MainVideosWrapperStyled, VideosWrapper } from 'containers/main-page/utils/styled';

const VideoPlayer = function (): JSX.Element {
  return (
    <MainVideosWrapperStyled>
      <BlurButton />
      <VideosWrapper container>
        <MyVideo />
        <UserVideo />
      </VideosWrapper>
    </MainVideosWrapperStyled>
  );
};

export default memo(VideoPlayer);
