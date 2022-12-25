import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addUser={store.addUser.bind(store)} />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
