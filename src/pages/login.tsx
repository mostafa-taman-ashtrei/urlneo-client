import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import InputComponent from '../components/inputComponent';
import { MyError } from '../types/myError';

const Login: React.FC = () => {
    const [errors, setErrors] = useState<MyError>({});
    const router = useRouter();

    const {
        handleChange, handleSubmit, values, errors: fErrors, touched, handleBlur,
    } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required Field'),
            password: Yup.string().required('Required Field'),
        }),
        onSubmit: async ({ username, password }) => {
            try {
                const res = await axios.post('/auth/login', {
                    username,
                    password,
                });

                console.log(res.data);
                router.push('/');
            } catch (e) {
                console.log(e);
                setErrors(e.response.data);
            }
        },
    });

    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <Head>
                <title>Login</title>
            </Head>
            <div className="bg-gray-300 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden lg:w-5/6">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-gray-500 py-10 px-10">
                        <svg
                            id="Layer_1"
                            enableBackground="new 0 0 512 512"
                            height="400"
                            viewBox="0 0 512 512"
                            width="512"
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
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                            <p>Enter your information to login</p>
                        </div>
                        <div className="w-90 ml-8">
                            <form onSubmit={handleSubmit}>
                                <InputComponent
                                    className="mb-2"
                                    type="username"
                                    value={values.username}
                                    setValue={handleChange}
                                    handleBlur={handleBlur}
                                    placeholder="Username ..."
                                    error={
                                        errors.username ? errors.username : null
                                            || touched.username && fErrors.username
                                            ? fErrors.username : undefined
                                    }
                                    id="username"
                                />

                                <InputComponent
                                    className="mb-2"
                                    type="password"
                                    value={values.password}
                                    setValue={handleChange}
                                    handleBlur={handleBlur}
                                    placeholder="password"
                                    error={errors.password ? errors.password : null
                                        || touched.password && fErrors.password
                                        ? fErrors.password : undefined}
                                    id="password"
                                />

                                <button type="submit" className=" transition duration-600 w-full rounded-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-800 border border-blue-500 hover:bg-green-500">
                                    Login
                                </button>
                            </form>

                            <small>
                                Do not have an account yet ?
                                <Link href="/register">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="ml-1 text-blue-600 uppercase">Get One</a>
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
