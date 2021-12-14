import {
  LegacyRef, memo, useEffect, useRef,
} from 'react';
import { useRenderBanuba } from 'common/Banuba/hooks/useBanuba';
import BlurButton from 'containers/main-page/VideoPlayer/BlurButton';
import { VideoStyled, VideoWrapper } from 'containers/main-page/utils/styled';
import { useConnection } from 'common/providers/hooks/useConnection';
import { MediaStreamCapture } from 'common/Banuba/SDK/BanubaSDK';
import Paper from '@mui/material/Paper';
import Name from 'containers/main-page/VideoPlayer/Name';
import { useBanubaContext } from 'common/providers/hooks/useBanubaContext';

const MyVideo = function (): JSX.Element {
  const meVideoRef = useRef<HTMLDivElement | null>(null);

  const { player } = useBanubaContext();
  // const { stream, setStream } = useConnection();
  useRenderBanuba(meVideoRef.current, player);

  // useEffect(() => {
  //   if (player && stream) {
  //     const capture = new MediaStreamCapture(player);
  //     // original audio
  //     const audio = stream.getAudioTracks()[0];
  //     // webar processed video
  //     const video = capture.getVideoTrack();
  //     const localStream = new MediaStream([audio, video]);
  //     setStream(localStream);
  //   }
  // }, [player]);

  return (
    <VideoWrapper item xs={12} md={6}>
      <Paper>
        <Name />
        <div ref={meVideoRef} />
      </Paper>
    </VideoWrapper>
    // <VideoWrapper item xs={12} md={6}>
    //
    //   <div ref={meVideoRef} />
    // </VideoWrapper>
  );
};

export default memo(MyVideo);
