import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App/App';
import store from "./js/index";
import './sass/index.scss';
import registerServiceWorker from './registerServiceWorker';

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
