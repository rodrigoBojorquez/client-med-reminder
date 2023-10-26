import React from 'react'

function InfoAlert({ title, message }) {
    return (
        <div
            className="bg-green-100 text-green-800 px-4 py-3 rounded relative"
            role="alert"
        >
            <p className="font-medium text-lg inline mr-2">{title}</p>
            <span className="block sm:inline mr-5">{message}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
        </div>
    )
}

export default InfoAlert