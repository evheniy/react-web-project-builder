import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppKernel from './app';
import * as serviceWorker from './serviceWorker';

const Page = lazy(() => import('./page'));

const App = AppKernel(Page);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
