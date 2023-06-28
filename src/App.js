import React, { Component } from 'react';
import { AppRoutes } from 'app/routes/Routes';
import { routes } from 'app/routes';
import { GlobalStyle } from 'app/ui/styles';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <GlobalStyle />
        <AppRoutes routes={routes} />
      </React.StrictMode>
    );
  }
}

export default App;
