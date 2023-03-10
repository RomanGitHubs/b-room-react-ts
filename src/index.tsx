import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root-book')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

serviceWorkerRegistration.register();
