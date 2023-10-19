import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/SidebarContext';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <AppProvider>
              <App />
            </AppProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
);
