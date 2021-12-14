import { useContext } from 'react';

import { SocketContext } from 'common/providers/ConnectionProvider';
import { ContextType } from 'common/providers/type';

export const useConnection = (): ContextType => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useConnection must be used within a ContextProvider');
  }

  return context;
};
