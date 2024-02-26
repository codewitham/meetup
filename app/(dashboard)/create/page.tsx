import WebinarForm from '@/components/CreateWebinar/WebinarForm'
import React from 'react'

const page = () => {
    return (
        <div className=' min-h-screen flex flex-col justify-center items-center px-5 py-20'>
            <div className=' mb-20 max-w-xl text-center  '>
                <h1 className=' text-3xl font-bold'>Create Webinar</h1>
                <p className=' text-muted-foreground text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam laudantium voluptatem autem natus inventore id dolor corrupti.</p>
            </div>
            <WebinarForm />
        </div>
    )
}

export default page