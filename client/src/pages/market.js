import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import mangos from '../assets/mangos.jpg';

const Market = () => {
    return (
        <div className='h-screen font-gilroy'>
            <Navbar />
            <div className='m-2 pt-8 ml-10 pl-10'>
                <h1 className='text-2xl'> Today's Featured Items </h1>
            </div>
            <div className='flex justify-center items-center bg-light-tan gap-32'>
                <div className='m-2 flex flex-col justify-center items-center'>
                    <img className='h-24 w-24 rounded-full' src= {mangos}></img>
                    <p className='mt-2 text-md'> Fresh Mangos </p>
                </div>
                <div className='m-2 flex flex-col justify-center items-center'>
                    <img className='h-24 w-24 rounded-full' src= {mangos}></img>
                    <p className='mt-2 text-md'> Fresh Mangos </p>
                </div>
                <div className='m-2 flex flex-col justify-center items-center'>
                    <img className='h-24 w-24 rounded-full' src= {mangos}></img>
                    <p className='mt-2 text-md'> Fresh Mangos </p>
                </div>
                <div className='m-2 flex flex-col justify-center items-center'>
                    <img className='h-24 w-24 rounded-full' src= {mangos}></img>
                    <p className='mt-2 text-md'> Fresh Mangos </p>
                </div>
                <div className='m-2 flex flex-col justify-center items-center'>
                    <img className='h-24 w-24 rounded-full' src= {mangos}></img>
                    <p className='mt-2 text-md'> Fresh Mangos </p>
                </div>
            </div>
            <div className='flex justify-center items-center m-2 p-8'>
                <h2 className='text-3xl font-semibold'> Austell Farmers Market </h2>
            </div>
            <div className='grid grid-cols-3 mx-4 px-4'>
                <div className='bg-cFruits m-4 p-4'>
                    <h2>Fruits & Vegetables</h2>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-2 grid-rows-2 gap-4 m-4'>
                        <div className='bg-cFruits shadow-md'>
                            <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                            <p className='mt-2 text-md'>Fresh Mangos</p>
                        </div>
                        <div className='bg-cFruits shadow-md'>
                            <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                            <p className='mt-2 text-md'>Fresh Mangos</p>
                        </div><div className='bg-cFruits shadow-md'>
                            <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                            <p className='mt-2 text-md'>Fresh Mangos</p>
                        </div><div className='bg-cFruits shadow-md'>
                            <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                            <p className='mt-2 text-md'>Fresh Mangos</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-3 gap-4 m-4 p-4'>
                    <div className='bg-cMeats shadow-md'>
                        <h2>Meats & Seafood</h2>
                    </div>
                    <div className='bg-cFruits shadow-md'>
                        <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                        <p className='mt-2 text-md'>Fresh Mangos</p>
                    </div>
                    <div className='bg-cFruits shadow-md'>
                        <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                        <p className='mt-2 text-md'>Fresh Mangos</p>
                    </div>
                </div>
                <div className='grid grid-rows-3 gap-4 m-4 p-4'>
                    <div className='bg-cDairy shadow-md'>
                        <h2>Dairy Products</h2>
                    </div>
                    <div className='bg-cFruits shadow-md'>
                        <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                        <p className='mt-2 text-md'>Fresh Mangos</p>
                    </div>
                    <div className='bg-cFruits shadow-md'>
                        <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                        <p className='mt-2 text-md'>Fresh Mangos</p>
                    </div>
                </div>
                <div className='grid grid-rows-3 gap-4 m-4 p-4'>
                    <div className='bg-cBaked shadow-md'>
                        <h2>Baked Goods</h2>
                    </div>
                    <div className='bg-cFruits shadow-md'>
                        <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                        <p className='mt-2 text-md'>Fresh Mangos</p>
                    </div>
                    <div className='bg-cFruits shadow-md'>
                        <img className='h-24 w-24 rounded-full' src={mangos} alt='Mangos' />
                        <p className='mt-2 text-md'>Fresh Mangos</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
};

export default Market;
