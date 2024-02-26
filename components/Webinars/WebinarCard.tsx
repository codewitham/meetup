'use client';
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import moment from "moment";
import { Button } from '../ui/button';
import { JoinWebinar } from '@/lib/actions/join.actions';
import { toast } from '../ui/use-toast';
import { Check, CheckCircle, UserPlus } from 'lucide-react';
import { getUserById } from '@/lib/actions/users.actions';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

const WebinarCard = ({ webinar }: { webinar: Webinar }) => {
    const [userId, setUserId] = useState("")
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { user } = await getUserById();
            setUserId(user?.id || "");
        }
        getUser();
    }, [])

    const handleJoin = async () => {
        const res = await JoinWebinar(webinar.id);
        console.log(res);
        if (res.message) {
            return toast({ title: res.message, description: `id: ${webinar.id}` })
        } else {
            return toast({ title: res.error })
        }
    }

    const joinMeetingNow = async () => {
        if (webinar.datetime > new Date()) {

            console.log("error: not started yet.");

            toast({ title: "Starts on", description: `${moment(webinar.datetime).fromNow()}` });
            return router.push("/");
        }
        return router.push(`/room/${webinar.id}`)
    }

    return (
        <Card className=' rounded-2xl border-none shadow-xl hover:shadow-2xl flex flex-col'>
            <CardHeader >
                <img src={webinar.thumbnail} alt={webinar.title} className=' h-full w-full rounded-lg' />
            </CardHeader>
            <CardContent>
                <CardTitle className=' text-xl'>
                    {webinar.title}
                </CardTitle>
            </CardContent>
            <CardFooter className=' w-full flex items-center justify-between gap-4 mb-0 mt-auto'>
                <CardDescription className=' text-xs md:text-sm'>
                    <span className=' text-xs text-purple-500'>Starts On</span>
                    <br />
                    {moment(webinar.datetime).fromNow()}
                </CardDescription>
                {webinar.Join?.some(join => join.userId === userId) ? (
                    <Button variant={"secondary"} onClick={joinMeetingNow}>
                        Joined <CheckCircle className=' h-4 w-4 ml-2' />
                    </Button>
                ) : (
                    <Button onClick={handleJoin}>
                        Join <UserPlus className=' h-4 w-4 ml-2' />
                    </Button>
                )}

            </CardFooter>
        </Card >
    )
}

export default WebinarCard