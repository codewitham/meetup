'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightCircle } from 'lucide-react'
import MobileNavbar from './MobileNavbar'
import GenerateMeet from '../Landing/GenerateMeet'
import { UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
    const path = usePathname();
    const { isSignedIn, user, isLoaded } = useUser();

    const isLinkActive = (href: string) => {
        return path === href;
    }

    return (
        <header className='w-full p-5'>
            <div className='container p-0 mx-auto w-full flex items-center justify-between gap-5'>
                <Link className='font-black text-3xl text-primary' href={"/"}>
                    meet<span className='text-yellow-300'>in</span>
                </Link>

                <div className='hidden lg:flex items-center gap-5'>
                    <Link href={"/"}>
                        <Button variant={isLinkActive("/") ? "secondary" : "ghost"}>
                            Home
                        </Button>
                    </Link>
                    <Link href={"/contact"}>
                        <Button variant={isLinkActive("/contact") ? "secondary" : "ghost"}>
                            Contact
                        </Button>
                    </Link>
                    <Link href={"/about"}>
                        <Button variant={isLinkActive("/about") ? "secondary" : "ghost"}>
                            About
                        </Button>
                    </Link>
                </div>

                <div className=' flex gap-5 items-center'>
                    {!isSignedIn ?
                        <div className='hidden lg:flex items-center gap-5'>
                            <Link href={"/sign-in"}>
                                <Button variant={isLinkActive("/sign-in") ? "secondary" : "ghost"}>
                                    Sign In
                                </Button>
                            </Link>

                            <Link href={"/sign-up"}>
                                <Button variant={"default"}>
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                        :
                        <UserButton afterSignOutUrl='/sign-in' />
                    }
                    <div className='block lg:hidden'>
                        <MobileNavbar />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar
