import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

import GlobalStyle from '@styles/GlobalStyle';
import Router from '@routers/Router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3090';

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#app'),
);
