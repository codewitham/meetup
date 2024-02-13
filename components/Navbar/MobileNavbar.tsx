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

const MobileNavbar = () => {
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
                        <Button variant={"secondary"} className=' justify-start w-full'>Home</Button>
                    </Link>
                    <Link className=' w-full' href={"/"}>
                        <Button variant={"ghost"} className='justify-start w-full'>About</Button>
                    </Link>
                    <Link className=' w-full' href={"/"}>
                        <Button variant={"ghost"} className='justify-start  w-full'>Contact</Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar