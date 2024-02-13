import React from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'

const SubscribeSection = () => {
    return (
        <div className=" relative py-20 px-5 bg-yellow-400 text-white overflow-hidden">

            <div className=' z-10 container mx-auto flex flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold text-center mb-4" > Subscribe Now</ h1>
                <p className=' text-center'>
                    Discover the perfect plan for your learning journey. Unlock a world of knowledge with our Saas courses tailored to your needs.
                    <br />
                    Join us in shaping your educational path and explore the possibilities today.
                </p>

                <div className=' max-w-lg w-full flex mt-10 items-center gap-2 justify-between p-2 rounded-lg bg-white  '>
                    <input type="text" placeholder='example@gmail.com' className='h-full w-full flex-1 outline-none text-black text-sm' />
                    <Button size={"icon"}>
                        <Send className='h-4 w-4' />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default SubscribeSection