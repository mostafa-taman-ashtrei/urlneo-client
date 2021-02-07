import React from 'react';
import { AppProps } from 'next/app';
import Axios from 'axios';

import '../styles/globals.css';

Axios.defaults.baseURL = 'http://localhost:5000/';
Axios.defaults.withCredentials = true;

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
