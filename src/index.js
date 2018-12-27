import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

//redux
import {Provider} from 'react-redux';
import generateStore from './redux/reducers';
const store = generateStore();



const WithRouter = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>


);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
