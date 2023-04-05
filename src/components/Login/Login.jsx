import React from 'react';

const Login = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl font-bold text-center my-2'>Login / Sign Up</h1>
            <div className="bg p-5  w-[450px] mx-auto bg-blue-500">

                <div className="border-[2px] border-[#95A0A7] bg-white">
                    <h1 className='text-3xl font-medium text-center my-4'>Sign Up</h1>
                    <div className="w-[80%] mx-auto">
                        <p className='text-[#2A414F] mb-2'>Email</p>
                        <input type="email" className='border w-full py-2 px-3 ' required placeholder='Email' />
                        <p className='text-[#2A414F] mb-2'>Password</p>
                        <input type="password" className='border w-full py-2 px-3 ' required placeholder='Password' />
                        <p className='text-[#2A414F] mb-2'>Confirm Password</p>
                        <input type="password" className='border w-full py-2 px-3 ' name="lk" placeholder='Confirm Password' required id="" />
                        <button className='py-2 w-full bg-[#ff99007f] text-xl font-medium  mt-9 '>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;