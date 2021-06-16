import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';
import Home from './pages/Home';


const App = () => (
  <AppProvider>
    <Home />
    
    <GlobalStyle />
  </AppProvider>
);

export default App;
