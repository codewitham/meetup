import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUserById } from '@/lib/actions/users.actions'
import { useUser } from '@clerk/nextjs';


const UserImage = () => {
    const { user } = useUser()
    return (
        <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>{user?.firstName?.slice(0, 2)}</AvatarFallback>
        </Avatar>
    )
}

export default UserImage