import React, { Component } from "react";
import { AppRoutes } from './app/routes/Routes';
import { routes } from "./app/routes";

class App extends Component {
  render() {
    return (
      <AppRoutes routes={routes} />
    );
  }
}

export default App;
