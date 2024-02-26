import Room from '@/components/Room/Room';
import { toast } from '@/components/ui/use-toast';
import { getUserById } from '@/lib/actions/users.actions';
import { getSingleWebinar } from '@/lib/actions/webinar.actions';
import moment from 'moment';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params }: { params: { roomId: string } }) => {
    const { user } = await getUserById();

    if (!user) {
        return redirect("/sign-up");
    }

    const { webinar } = await getSingleWebinar(params.roomId);

    if (!webinar) {
        return redirect("/");
    }

    // if (webinar.datetime > new Date()) {

    //     console.log("error: not started yet.");

    //     toast({ title: "Starts on", description: `${moment(webinar.datetime).fromNow()}` });
    //     return redirect("/");
    // }

    return (
        <Room room={webinar} user={user} />
    )
}

export default page


//Type '{ room: { Join: { userId: string; }[]; } & { id: string; title: string; description: string; datetime: Date; maxPersons: number; organizerId: string; isPaid: boolean; thumbnail: string; }; user: { ...; }; }' is not assignable to type 'IntrinsicAttributes & { roomId: Webinar; user: User; }'.
// Property 'room' does not exist on type 'IntrinsicAttributes & { roomId: Webinar; user: User; }'.