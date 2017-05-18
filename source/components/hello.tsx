import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps {
  name: string;
}

interface HelloState {

}

class Hello extends React.Component<HelloProps, HelloState> {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default Hello;
