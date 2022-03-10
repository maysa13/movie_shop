import './App.css';
import Mainpage from './page/mainpage'
import 'antd/dist/antd.css';
import ContextProvider from './store/ProviderComposer'

function App() {
  return (
    // <ContextProvider>
      <Mainpage/>
    // </ContextProvider>
  );
}

export default App;
