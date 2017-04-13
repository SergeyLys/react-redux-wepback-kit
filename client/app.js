import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);