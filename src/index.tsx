import React from 'react';
import './index.css';
import App from './App';
import {store} from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>);
