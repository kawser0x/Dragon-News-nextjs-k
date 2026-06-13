import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-xl pb-3'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500'>
                    <FaGoogle></FaGoogle>
                    Login with Google 
                </button>
                <button className='btn'>
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;