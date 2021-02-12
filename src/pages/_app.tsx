import React from 'react';
import { AppProps } from 'next/app';
import Axios from 'axios';
import { useRouter } from 'next/router';

import '../styles/globals.css';
import AuthProvider from '../context/authContext';
import Navbar from '../components/navbar';

Axios.defaults.baseURL = 'http://localhost:5000/';
Axios.defaults.withCredentials = true;

const App = ({ Component, pageProps }: AppProps) => {
    const { pathname } = useRouter();

    const authRoutes = ['/register', '/login'];
    const authRoute = authRoutes.includes(pathname);

    return (
        <AuthProvider>
            <>
                {!authRoute && <Navbar />}
                <Component {...pageProps} />
            </>
        </AuthProvider>
    );
};

export default App;
