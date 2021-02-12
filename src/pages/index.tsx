import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => (
    <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <h1 className="font-bold text-3xl text-green-500">Home Page</h1>
        </div>
    </div>

);

export default Home;
