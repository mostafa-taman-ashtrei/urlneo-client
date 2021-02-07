import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h2 className="text-5xl text-green-600">Hello World!!</h2>
    </div>
);

export default Home;
