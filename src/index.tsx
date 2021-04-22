import React from 'react';
import ReactDOM from 'react-dom';

// local
import WordAnalyzerApp from './WordAnalyzerApp';

// Styles
import './index.css';
import "@fontsource/dancing-script";
import "@fontsource/special-elite";

ReactDOM.render(
  <React.StrictMode>
      <WordAnalyzerApp />
  </React.StrictMode>,
  document.getElementById('root')
);
