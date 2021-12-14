import { useContext } from 'react';

import { BanubaContextType } from 'common/providers/type';
import { BanubaContext } from 'common/providers/BanubaProvider';

export const useBanubaContext = (): BanubaContextType => {
  const context = useContext(BanubaContext);
  if (context === undefined) {
    throw new Error('useBanuba must be used within a BanubaContextProvider');
  }

  return context;
};
