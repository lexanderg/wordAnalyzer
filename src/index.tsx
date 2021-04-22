import React from 'react';
import ReactDOM from 'react-dom';

// local
import WordAnalyzerApp from './WordAnalyzerApp';

// redux
import { Provider } from 'react-redux';
import configureStore from './redux/store';

// Styles
import './index.css';
import "@fontsource/dancing-script";
import "@fontsource/special-elite";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <WordAnalyzerApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
