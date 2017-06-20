import * as React from 'react';
import * as styles from './App.css';

interface AppProps { compiler:string; framework:string; }

// tslint:disable-next-line:no-default-export
export default class App extends React.Component<AppProps, undefined> {
  render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
