import React from 'react';

const Cards = ({ content }) => {
    const { title, body } = content;

    return (
             <div className='w-52 h-60  border-2 border-black m-4 bg-red-400 overflow-auto '>
                <div className="title text-2xl">{title}</div>
                <div className="desc py-7">{body}</div>
            </div>
    );
};

export default Cards;
