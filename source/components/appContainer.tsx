import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin = require('react-tap-event-plugin');
import App from './app';

injectTapEventPlugin();

interface AppContainerProps {}

interface AppContainerState {}

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
  render() {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  }
}

export default AppContainer;
