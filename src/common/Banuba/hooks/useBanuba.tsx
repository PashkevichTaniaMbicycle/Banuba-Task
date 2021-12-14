import {
  Player, Effect, Dom, MediaStreamCapture,
} from 'common/Banuba/SDK/BanubaSDK.js';
import { useEffect, useState } from 'react';

export const useMyStream = (player: Player | null, stream: MediaStream): MediaStream | undefined => {
  let localStream;
  if (player) {
    const webar = new MediaStreamCapture(player);
    // original audio
    const audio = stream.getAudioTracks()[0];
    // webar processed video
    const video = webar.getVideoTrack();

    localStream = new MediaStream([audio, video]);
  }

  return localStream;
};

export const useRenderBanuba = (div: HTMLDivElement | HTMLElement | null, player: Player | null): void => {
  useEffect(() => {
    if (div && player) {
      Dom.render(player, div);
    }

    return () => {
      if (div) {
        Dom.unmount(div);
      }
    };
  });
};

export const BlurUnblurVideo = (player: Player | null, effect: Effect | null, isBlur: boolean): void => {
  if (player && effect) {
    if (isBlur) {
      console.log('blur');
      player.applyEffect(effect);
    } else {
      console.log('unblur');
      player.clearEffect();
    }
  }
};
