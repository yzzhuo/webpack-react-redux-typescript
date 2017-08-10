import * as React from 'react';
import * as styles from './App.css';

interface AppProps { compiler: string; framework: string; }

// tslint:disable-next-line:no-default-export
export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div>
        <h1>Web Recorder</h1>
        <button>录音</button>
        <button>停止</button>
        <div className='audio-container'>
        </div>
      </div>
    );
  }
}
