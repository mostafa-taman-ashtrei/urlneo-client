import React from 'react';
import { MyUrl } from '../types/MyUrl';

interface props {
    urls: MyUrl[]
}

const Table: React.FC<props> = ({ urls }: props) => (
    <table className="rounded-t-lg m-5 w-5/6 mx-auto text-gray-100 bg-gradient-to-l from-gray-500 to-gray-800">
        <thead>
            <tr className="text-left border-b-2 border-indigo-300">
                <th className="px-4 py-3">full Url</th>
                <th className="px-4 py-3">Neo Url</th>
                <th className="px-4 py-3">Clicks</th>
            </tr>
        </thead>
        <tbody>
            {
                urls.map((u) => (
                    <tr className="border-b border-indigo-400" key={u.shortUrl}>
                        <td className="px-4 py-3">{u.fullUrl}</td>
                        <td className="px-4 py-3">
                            <a href={`localhost:5000/${u.shortUrl}`} target="_blank" rel="noreferrer">
                                {u.shortUrl}
                            </a>
                        </td>
                        <td className="px-4 py-3">{u.clicks}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);

export default Table;
