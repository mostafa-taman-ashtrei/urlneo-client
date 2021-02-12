import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import InputComponent from '../components/inputComponent';
import { MyUrlError } from '../types/myError';

const newUrl: React.FC = () => {
    const [errors, setErrors] = useState<MyUrlError>({});
    const router = useRouter();

    const {
        handleChange, handleSubmit, values, errors: fErrors, touched, handleBlur,
    } = useFormik({
        initialValues: {
            shortUrl: '',
            fullUrl: '',
        },
        validationSchema: Yup.object({
            shortUrl: Yup.string(),
            fullUrl: Yup.string().required('Required Field'),
        }),
        onSubmit: async ({ shortUrl, fullUrl }) => {
            try {
                const res = await axios.post('/shrink', {
                    shortUrl,
                    fullUrl,
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
                    <div className="w-full md:w-full py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Shrink Urls</h1>
                            <p>Enter a url to shrink</p>
                        </div>
                        <div className="w-90 ml-8">
                            <form onSubmit={handleSubmit}>
                                <InputComponent
                                    className="mb-2"
                                    type="shortUrl"
                                    value={values.shortUrl}
                                    setValue={handleChange}
                                    handleBlur={handleBlur}
                                    placeholder="shortUrl ..."
                                    error={
                                        errors.shortUrl ? errors.shortUrl : null
                                            || touched.shortUrl && fErrors.shortUrl
                                            ? fErrors.shortUrl : undefined
                                    }
                                    id="shortUrl"
                                />

                                <InputComponent
                                    className="mb-2"
                                    type="fullUrl"
                                    value={values.fullUrl}
                                    setValue={handleChange}
                                    handleBlur={handleBlur}
                                    placeholder="fullUrl"
                                    error={errors.fullUrl ? errors.fullUrl : null
                                        || touched.fullUrl && fErrors.fullUrl
                                        ? fErrors.fullUrl : undefined}
                                    id="fullUrl"
                                />

                                <button type="submit" className=" transition duration-600 w-full rounded-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-800 border border-blue-500 hover:bg-green-500">
                                    shrink
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default newUrl;
