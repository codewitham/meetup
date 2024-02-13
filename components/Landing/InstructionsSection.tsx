import { Video } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';

const InstructionsSection = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-10 py-20'>
            <div className='w-full h-full flex flex-col gap-5'>
                <h1 className=' text-4xl font-bold'>Learn About Services<br /> We Provide</h1>
                <p className=' mt-2 text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores cumque reiciendis natus voluptatem. Deleniti accusantium officiis voluptate fuga dolor, cumque magni, omnis sint iure, at ducimus ratione. Molestiae, expedita.</p>
                <img src="https://img.freepik.com/free-vector/big-meeting-room-concept-illustration_114360-24589.jpg?size=626&ext=jpg&ga=GA1.1.275680919.1699162440&semt=sph" alt="art" />

            </div>
            <div className='w-full'>
                <div className='flex flex-col gap-8'>
                    {[1, 2, 3].map((index) => (
                        <Card key={index} className='flex gap-4 p-5 border-none rounded-2xl drop-shadow-xl'>
                            <div className=' h-fit w-fit p-3 rounded-full text-white bg-yellow-400'>
                                <Video className='h-6 w-6 ' />
                            </div>
                            <CardContent>
                                <h1 className='text-lg font-bold'>Video Comprehension</h1>
                                <p className='text-muted-foreground mt-2 text-sm'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse laborum provident necessitatibus nihil, cumque ipsam, quam consequatur alias eius atque laboriosam. Quod eligendi illo commodi excepturi tenetur vitae rerum saepe?
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default InstructionsSection;
