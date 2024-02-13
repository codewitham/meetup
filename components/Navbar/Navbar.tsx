import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightCircle } from 'lucide-react'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
    return (
        <header className='w-full p-5'>
            <div className='  container mx-auto w-full flex items-center justify-between gap-5'>
                <Link className=' font-black text-3xl text-primary' href={"/"}>
                    meet
                </Link>

                <div className='hidden lg:flex items-center gap-5'>
                    <Link href={"/"}>
                        <Button variant={"secondary"}>
                            Home
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Contact
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            About
                        </Button>
                    </Link>
                </div>

                <div className='hidden lg:flex items-center gap-5'>
                    <Link href={"/"}>
                        <Button className=' rounded-full'>
                            Join Now <ArrowRightCircle className=' ml-2 h-4 w-4 ' />
                        </Button>
                    </Link>
                </div>
                <div className=' block lg:hidden'>
                    <MobileNavbar />
                </div>
            </div>
        </header>
    )
}

export default Navbar