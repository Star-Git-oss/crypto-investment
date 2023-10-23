import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/SidebarContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import store from './store';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(

    // <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <BrowserRouter>
              <AppProvider>
                <App />
              </AppProvider>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    // </React.StrictMode>
);
