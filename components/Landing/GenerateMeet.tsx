'use client';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/button';
import { ArrowRightCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GenerateMeet = () => {
    const router = useRouter();

    const handleMeet = () => {
        const id = uuidv4();
        return router.push("/room/" + id);
    }

    return (
        <Button onClick={handleMeet} className=' rounded-full' size={"lg"}>
            Join Meet <ArrowRightCircle className=' ml-2 h-4 w-4 ' />
        </Button>
    )
}

export default GenerateMeet