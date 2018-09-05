import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>

    <Switch>
    <Provider store={store}>
        <App />
    </Provider>
    </Switch>
    </HashRouter>

    , document.getElementById('root'));
registerServiceWorker();
