import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContext, { AuthContextProvider } from './store/auth-Context';

ReactDOM.render(
<AuthContextProvider>
    <App />
</AuthContextProvider>, document.getElementById('root'));
