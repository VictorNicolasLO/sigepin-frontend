import React from 'react';
import './App.css';
import '@material/react-material-icon/dist/material-icon.css';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import MainRouter from './router';

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <MainRouter />
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
