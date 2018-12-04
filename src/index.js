import React from 'react';
import ReactDOM from 'react-dom';

import {
    ThemeProvider
} from 'react-jss';

import App from './layouts/App';

import theme from './styles/theme';

import './assets/css/custom.css?v=1.0.0';
import './assets/css/normalize.css?v=8.0.0';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
