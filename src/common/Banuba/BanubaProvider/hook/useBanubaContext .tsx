import { useContext } from 'react';

import { BanubaContextType } from 'common/Banuba/BanubaProvider/type';
import { BanubaContext } from 'common/Banuba/BanubaProvider/BanubaProvider';

export const useBanubaContext = (): BanubaContextType => {
  const context = useContext(BanubaContext);
  if (context === undefined) {
    throw new Error('useBanuba must be used within a BanubaContextProvider');
  }

  return context;
};
