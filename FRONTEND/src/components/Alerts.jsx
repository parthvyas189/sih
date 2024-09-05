import React from 'react';

function Alert({ name }) {
    return (
        <div className="p-4 bg-gray-200 border border-gray-300 rounded-md mb-2">
            <p className="text-sm font-medium">{name}</p>
        </div>
    );
}

export default Alert;
