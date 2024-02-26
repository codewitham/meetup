'use client';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserImage from './UserImage'
import { useClerk } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';


const UserBox = () => {
    const { signOut } = useClerk();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button>
                    <UserImage />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=' max-w-lg w-full'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <Link href={"/create"}><DropdownMenuItem>Create</DropdownMenuItem></Link>
                <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UserBox