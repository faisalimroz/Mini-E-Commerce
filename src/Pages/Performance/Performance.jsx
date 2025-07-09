import React from 'react';

const Performance = () => {
    return (
       <div className='my-16 w-full'>
            <div className="overflow-hidden">
                <div
                    className="lg:h-[300px] h-full py-6 bg-fixed bg-cover bg-center flex flex-col items-center justify-center bg-[#3B5189]"
                    style={{ backgroundImage: `url('https://i.ibb.co.com/JCMzWJb/banner-bg.jpg')` }}
                >


                    <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col lg:items-start items-center justify-around w-full md:w-4/5'>
                        <div className='flex flex-col items-center gap-2'>
                            <h2 className='text-4xl text-white font-bold'>10+</h2>
                            <p className='text-xl text-white font-bold'>Years of Reputation</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-4xl text-white font-bold'>100+</h2>
                        <p className='text-xl text-white font-bold'>Working Employees</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>

                             <h2 className='text-4xl text-white font-bold'>1500+</h2>
                            <p className='text-xl text-white font-bold'>Products </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                          
                        <h2 className='text-4xl text-white font-bold'>12000+</h2>
                        <p className='text-xl text-white font-bold'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;