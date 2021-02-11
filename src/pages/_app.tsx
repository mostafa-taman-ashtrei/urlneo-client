import React from 'react';
import { AppProps } from 'next/app';
import Axios from 'axios';

import '../styles/globals.css';
import AuthProvider from '../context/authContext';

Axios.defaults.baseURL = 'http://localhost:5000/';
Axios.defaults.withCredentials = true;

const App = ({ Component, pageProps }: AppProps) => (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
);

export default App;
