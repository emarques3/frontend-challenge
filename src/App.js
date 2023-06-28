import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AppRoutes } from 'app/routes/Routes';
import { routes } from 'app/routes';
import { GlobalStyle } from 'app/ui/styles';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.StrictMode>
          <GlobalStyle />
          <AppRoutes routes={routes} />
        </React.StrictMode>
      </Provider>
    );
  }
}

export default App;
