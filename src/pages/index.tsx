import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';
import { useAuthState, useAuthDispatch } from '../context/authContext';

const Home: React.FC = () => {
    const { user, loading, isAuth } = useAuthState();
    const dispatch = useAuthDispatch();
    const router = useRouter();

    const handleLogout = async (): Promise<void> => {
        try {
            await axios.get('auth/logout');
            dispatch('LOGOUT');
            router.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                {!loading && (isAuth ? (
                    <div>

                        <h2 className="text-5xl text-green-600">
                            Hello
                            {' '}
                            {user?.username}
                        </h2>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="w-32 py-1 mr-2  bg-blue-500 font-bold text-center uppercase border rounded"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <h1 className="text-5xl text-green-600">Home page</h1>
                ))}
            </div>
        </>

    );
};

export default Home;
