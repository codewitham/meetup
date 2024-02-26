import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-1 h-full w-full flex flex-col justify-center items-center bg-secondary'>
                {children}
            </div>
        </div>
    )
}

export default layout