import React from 'react'

const NotFound = () => {
return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-900 to-slate-800">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-2xl text-slate-300 mb-8">Page not found</p>
            <a
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
                Go Home
            </a>
        </div>
    </div>
)
}

export default NotFound
