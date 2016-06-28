import React from 'react';
import { render as renderToDom } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*- Internal imports -*/

import { App } from './components/App/App.jsx';
import { rootReducer } from './reducers';

const store = createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

renderToDom(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);