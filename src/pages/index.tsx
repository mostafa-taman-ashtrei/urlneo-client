import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import { useAuthState } from '../context/authContext';
import Table from '../components/table';
import { MyUrl } from '../types/MyUrl';

const Home: React.FC = () => {
    const { isAuth, user, loading } = useAuthState();
    const [urls, setUrls] = useState<MyUrl[]>([]);

    const getUrls = async () => {
        try {
            const res = await axios.get('/all');
            setUrls(res.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { getUrls(); }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-900 min-w-screen min-h-screen px-5 py-5">
                {!loading && (isAuth ? (
                    <>
                        <p className="text-lg text-center text-green-600 font-bold m-5">
                            {user?.username}
                            {' '}
                            has
                            {' '}
                            {urls.length}
                            {' '}
                            NeoUrls
                        </p>
                        <Table urls={urls} />
                    </>

                ) : (
                    <h1 className="text-lg text-center text-green-600 font-bold m-5">Home Page</h1>
                ))}

            </div>
        </div>

    );
};

export default Home;
