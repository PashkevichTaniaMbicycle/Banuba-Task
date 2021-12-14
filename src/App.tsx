import ApplicationBar from 'containers/application-bar';
import { MainPage } from 'containers/main-page';

import { ContextProvider } from 'common/providers/ConnectionProvider';
import { BanubaProvider } from 'common/providers/BanubaProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContainerStyled } from 'styled';

const App = function (): JSX.Element {
  return (
    <ContainerStyled>
      <BanubaProvider>
        <ContextProvider>
          <ApplicationBar />
          <MainPage />
          <ToastContainer />
        </ContextProvider>
      </BanubaProvider>
    </ContainerStyled>
  );
};

export default App;
