import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Switch} from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import {createBrowserHistory} from 'history'

import './index.css'
import App from './App';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import configureStore from './Store'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
document.getElementById('root'));

