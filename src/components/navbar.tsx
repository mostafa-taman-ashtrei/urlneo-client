/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

import { useAuthState, useAuthDispatch } from '../context/authContext';

const Navbar = () => {
    const { isAuth, loading } = useAuthState();
    const dispatch = useAuthDispatch();
    const router = useRouter();

    console.log(loading);
    console.log('isAuth', isAuth);

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
        <nav className="px-6 py-2 bg-gray-800 shadow-md md:flex ">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <a className="w-8 h-8 m-2">
                            <svg
                                id="Layer_1"
                                enableBackground="new 0 0 512 512"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path d="m356.415 253.463s5.962 24.147 3.405 50.826c-1.964 20.495-11.373 37.991-20.88 53.199 0 0 6.202-3.172 8.129-4.274 19.373-11.075 37.087-24.862 52.677-40.884l72.808-74.824c53.364-54.841 52.463-143.675-2.002-197.407-54.465-53.733-142.688-52.826-196.051 2.016l-84.726 87.072c-53.364 54.841-52.463 143.675 2.002 197.407 16.109 15.892 33.845 26.561 54.085 32.912 0 0 16.786-14.825 28.703-29.6 12.711-15.76 19.001-34.06 19.001-34.06-10.678.873-29.754-3.109-29.754-3.109-9.697-3.042-16.561-7.608-24.278-15.221-26.089-25.738-26.52-68.289-.959-94.558l90.313-92.814c25.561-26.269 67.82-26.704 93.909-.966 26.089 25.738 26.52 68.289.959 94.558z" fill="#1766a0" />
                                    <path d="" />
                                    <path d="m154.232 259.935s-6.032-25.111-2.674-51.699c2.479-19.632 9.059-35.811 17.506-51.69 0 0-2.209 1.139-4.136 2.241-19.373 11.075-37.087 24.862-52.677 40.884l-72.808 74.824c-53.364 54.841-52.463 143.675 2.002 197.407 54.465 53.733 142.688 52.826 196.051-2.016l84.726-87.072c53.364-54.841 52.463-143.675-2.002-197.407-16.108-15.892-32.537-25.765-52.777-32.116 0 0-8.952 8.954-28.868 29.667-16.243 16.893-17.494 33.053-17.494 33.053 10.678-.873 27.103 3.254 27.103 3.254 9.697 3.042 16.561 7.608 24.278 15.221 26.089 25.738 26.52 68.289.959 94.558l-90.313 92.814c-25.561 26.269-67.82 26.704-93.909.966-26.089-25.738-26.52-68.289-.959-94.558z" fill="#00337a" />
                                    <g fill="#145481">
                                        <path d="m191.785 326.586c16.108 15.892 33.845 26.561 54.085 32.912 0 0 16.786-14.825 28.703-29.6 12.711-15.76 19.001-34.06 19.001-34.06-10.678.873-29.754-3.109-29.754-3.109-9.697-3.042-16.561-7.608-24.278-15.221-.479-.472-.93-.961-1.391-1.444l-48.266 48.6c.628.643 1.257 1.288 1.9 1.922z" />
                                        <path d="m472.563 237.498c53.043-54.512 52.462-142.601-1.034-196.428l-48.254 48.588c25.61 25.784 25.891 67.964.488 94.07l-67.34 69.728s5.962 24.147 3.405 50.826c-1.964 20.495-11.373 37.991-20.88 53.199 0 0 6.202-3.172 8.129-4.274 19.373-11.075 37.087-24.862 52.677-40.884z" />
                                    </g>
                                    <path d="m324.207 189.411-48.31 48.645c22.674 25.962 21.976 65.86-2.422 90.934l-90.313 92.814c-25.03 25.723-66.061 26.657-92.252 2.518l-48.281 48.615c54.548 52.619 141.922 51.361 194.919-3.104l84.726-87.072c52.043-53.485 52.465-139.294 1.933-193.35z" fill="#002659" />
                                </g>
                            </svg>
                        </a>
                    </Link>

                    <span className="text-2xl font-semibold text-white">
                        <Link href="/">
                            NeoUrl
                        </Link>
                    </span>
                </div>
                <div className="md:hidden">
                    <button type="button" className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full pb-2 md:flex md:items-center md:justify-between md:pb-0 ">
                <div className="flex flex-col px-2 md:flex-row">
                    <a href="#" className="py-2 px-2 text-white rounded hover:bg-gray-900 hover:text-gray-300 hover:font-medium md:mx-2">About</a>
                    <a href="#" className="py-2 px-2 text-white rounded hover:bg-gray-900 hover:text-gray-300 hover:font-medium md:mx-2">Contact</a>
                </div>
                <div className=" flex">
                    {!loading && (isAuth ? (
                        <button
                            type="button"
                            className="w-32 py-1 mr-2  bg-blue-500 font-bold text-center uppercase border rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    ) : (
                        <>
                            <Link href="/login">
                                <a className="w-32 py-1 mr-2  bg-blue-500 font-bold text-center uppercase border rounded">log in</a>
                            </Link>
                            <Link href="/register">
                                <a className="w-32 py-1 mr-2  text-blue-500 bg-transparent font-bold text-center uppercase border rounded">sign up</a>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
