import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import App from './src/App';

export default function Main(props) {
  const store = configureStore(null, {});
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}