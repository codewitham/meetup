import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button } from '../ui/button'
import { ArrowRightCircle, Video } from 'lucide-react'
import HeroDisplayMedia from './HeroDisplayMedia'

const HeroSection = () => {
    return (
        <div className=' relative flex flex-col h-full '>
            <Navbar />
            <div className=' container px-5 py-20 md:py-40 flex flex-col gap-10 text-center flex-1  items-center justify-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl'>
                        Boost Your Business With
                        <br />
                        Advanced Webinar & Meetings
                    </h1>
                    <p className=' text-muted-foreground mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos provident quisquam esse
                        <br />
                        doloremque adipisci consequatur illo quis sed dolorem.
                    </p>
                </div>

                <div className=' flex items-center gap-5 mb-20'>
                    <Button className=' rounded-full' size={"lg"}>
                        Join Now <ArrowRightCircle className=' ml-2 h-4 w-4 ' />
                    </Button>
                    <Button size={"lg"} className=' rounded-full border-primary' variant={"outline"}>
                        Watch Video <Video className=' ml-2 h-4 w-4' />
                    </Button>
                </div>
                <HeroDisplayMedia />
            </div>

            {/* <div className='absolute top-[-100px] left-[-100px] rounded-full h-[800px] w-[800px] bg-yellow-100/30 blur-md z-[-1]'></div>

            <div className='absolute bottom-[-100px] right-[-100px] rounded-full h-[800px] w-[800px] bg-pink-100/30 blur-md z-[-1]'></div>
        */}
        </div>
    )
}

export default HeroSection