import React from 'react';

function FigureBox({ title, value }) {
    return (
        <div className="flex-1 p-4 bg-white border border-gray-700 shadow-md rounded-lg">
            <h3  className="text-gray-400 text-5xl">{value}</h3>
            <p className="text-customBlue text-xl font-semibold">{title}</p>
        </div>
    );
}

export default FigureBox;
