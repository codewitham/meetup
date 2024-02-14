'use client';
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs';
import GenerateMeet from '../Landing/GenerateMeet';

const MobileNavbar = () => {
    const { isSignedIn, user, isLoaded } = useUser();
    const path = usePathname();

    const isLinkActive = (href: string) => {
        return path === href;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className=' h-4 w-4' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Link className=' font-black text-3xl text-primary' href={"/"}>
                            meet<span className=' text-yellow-300'>in</span>
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <div className=' flex flex-col mt-10'>
                    <Link className=' w-full' href={"/"}>
                        <Button variant={isLinkActive("/") ? "secondary" : "ghost"} className=' justify-start w-full'>Home</Button>
                    </Link>
                    <Link className=' w-full' href={"/about"}>
                        <Button variant={isLinkActive("/about") ? "secondary" : "ghost"} className='justify-start w-full'>About</Button>
                    </Link>
                    <Link className=' w-full' href={"/contact"}>
                        <Button variant={isLinkActive("/contact") ? "secondary" : "ghost"} className='justify-start  w-full'>Contact</Button>
                    </Link>
                </div>


                <div className=' pt-5 mt-5 border-t'>
                    {!isSignedIn ?
                        <>
                            <Link className=' w-full' href={"/sign-in"}>
                                <Button variant={isLinkActive("/sign-in") ? "secondary" : "ghost"} className='justify-start  w-full'>Sign In</Button>
                            </Link>
                            <Link className=' w-full' href={"/sign-up"}>
                                <Button variant={isLinkActive("/sign-up") ? "secondary" : "ghost"} className='justify-start  w-full'>Sign Up</Button>
                            </Link>
                        </>
                        :
                        <GenerateMeet />
                    }
                </div>

                <div className=' mt-5 border-t pt-5'>
                    <UserButton afterSignOutUrl='/' />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar