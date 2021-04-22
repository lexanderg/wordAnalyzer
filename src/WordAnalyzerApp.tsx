// local
import Form from './components/Form';

// redux
import { Provider } from 'react-redux';
import configureStore from './redux/store';

// Styles
import './WordAnalyzerApp.css';

function WordAnalyzerApp() {
  return (
    <Provider store={configureStore()}>
      <div className='AppWrapper'>
        <Form />
      </div>
    </Provider>
  );
}

export default WordAnalyzerApp;
