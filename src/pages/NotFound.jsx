import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">Page not found</h2>
            <p className="mt-3 text-gray-600">Sorry — nothing to see here.</p>
            <div className="mt-6">
                <Link to="/" className="text-indigo-600 hover:underline">
                    Return home
                </Link>
            </div>
        </div>
    );
}