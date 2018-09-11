import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
// import App from './App';
import routes from './route/index';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <div style={{height: '100%'}}>
            {routes}
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
