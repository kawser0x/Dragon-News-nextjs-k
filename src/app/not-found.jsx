import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='pt-20 text-center space-y-3'>
            <h2 className='font-bold text-4xl text-purple-400'>This Page is Not found</h2>
            <h1 className='font-bold text-5xl'> 404 </h1>
            <Link href={"/"}>
            <button className='btn'> Back to Home</button></Link>
        </div>
    );
};

export default NotFound;