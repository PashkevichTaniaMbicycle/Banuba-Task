import {
  Player, Effect, Dom,
} from 'common/Banuba/SDK/BanubaSDK.js';
import { useEffect } from 'react';

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
