import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from 'styled-components';
import Global from './components/styledComponents/Global';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()

const theme = {
  colors: {
    primary: 'red',
    secondary: "green",
  },
}

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
      <Global/>
    </ThemeProvider>
  </Provider>
);
