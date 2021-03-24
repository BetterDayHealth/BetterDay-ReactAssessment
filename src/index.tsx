import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { store } from './store';
// import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
