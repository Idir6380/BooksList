import React from 'react';
import ReactDOM from 'react-dom/client';

import './CSS/index.css';

import App from './App';
import { Provider } from './context/books';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);
root.render(
    <Provider >
        <App />
    </Provider>
);