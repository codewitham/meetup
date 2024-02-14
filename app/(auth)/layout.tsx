import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' flex flex-col min-h-screen'>
            <Navbar />
            <div className=' bg-secondary flex-1 h-full w-full flex flex-col justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

export default layout