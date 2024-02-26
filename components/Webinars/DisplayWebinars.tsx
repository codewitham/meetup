import { getAllWebinars } from '@/lib/actions/webinar.actions'
import React from 'react'
import WebinarCard from './WebinarCard';

const DisplayWebinars = async () => {
    const { webinars } = await getAllWebinars() as { webinars: Webinar[] };


    return (
        <div className=' container mx-auto p-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {webinars?.map((webinar, index: number) => (
                <WebinarCard webinar={webinar} key={index} />
            ))}
        </div>
    )
}

export default DisplayWebinars