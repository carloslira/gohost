import React from 'react';
import ReactDOM from 'react-dom';

import {
    Route,
    Router,
    Switch
} from 'react-router-dom';

import {
    createBrowserHistory
} from 'history';

import {
    ThemeProvider
} from 'react-jss';

import indexRoutes from './routes/index';

import theme from './styles/theme';

import './assets/css/normalize.css?v=8.0.0';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <ThemeProvider theme={theme}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </ThemeProvider>
    </Router>,
    document.getElementById('root')
);
