/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import store from './src/redux/store';
import { Provider } from 'react-redux';
import React from 'react';

function appCenter(props) {
    if (props && props.isHeadless && props.isHeadless.isHeadless) {
      return null;
    }
  
    return (
        // <Provider >
          <App />
        // </Provider>
    );
  }
AppRegistry.registerComponent(appName, () => appCenter);
