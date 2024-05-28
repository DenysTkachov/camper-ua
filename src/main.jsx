
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from '../src/components/App.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
          <App />
        
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
