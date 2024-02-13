import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className=' container px-5 py-10 border-t mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center md:text-left '>
                <div>
                    <h1 className=' text-4xl font-black'>
                        Meet
                    </h1>
                    <p className=' text-yellow-500'>example@gmail.com</p>
                </div>
                <div className='flex flex-col gap-3 text-sm'>
                    <h1 className=' text-lg font-semibold'>Quick Links</h1>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Pricing</Link>
                    <Link href={"/"}>Contact</Link>
                </div>
                <div className='flex flex-col gap-3 text-sm'>
                    <h1 className=' text-lg font-semibold'>Quick Links</h1>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Pricing</Link>
                    <Link href={"/"}>Contact</Link>
                </div>
                <div className='flex flex-col gap-3 text-sm'>
                    <h1 className=' text-lg font-semibold'>Quick Links</h1>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Pricing</Link>
                    <Link href={"/"}>Contact</Link>
                </div>

            </div>
            <div className=' container p-5 border-t flex flex-col md:flex-row gap-5 items-center justify-between'>
                <h1>All Rights Reserved!</h1>
                <Link className=' text-sm' href={"/"}>Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer