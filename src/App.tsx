import ApplicationBar from 'containers/application-bar';
import { MainPage } from 'containers/main-page';

import { ContainerStyled } from 'styled';
import { ContextProvider } from 'common/providers/ConnectionProvider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = function (): JSX.Element {
  return (
    <ContainerStyled>
      <ContextProvider>
        <ApplicationBar />
        <MainPage />
        <ToastContainer />
      </ContextProvider>
    </ContainerStyled>
  );
};

export default App;
