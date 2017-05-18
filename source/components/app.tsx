import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Hello from './hello';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Hello name ="hello1" />
        <Hello name ="hello2" />
        <Hello name ="hello3" />
        <RaisedButton label="click" />
      </div>
    );
  }
}

export default App;
