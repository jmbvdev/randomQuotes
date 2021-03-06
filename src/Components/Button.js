import React from 'react';

const Button = ({getRandomQuote, background}) => {
    return (
        <div>
            <button onClick={getRandomQuote} style={{background: background}}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Button;