import { ShieldCheck, Users, Video } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const FeaturedSection = () => {
    const features = [
        {
            title: "Video Content",
            color: "bg-yellow-100",
            icon: <Video className='h-4 w-4' />,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos provident quisquam esse doloremque adipisci consequatur illo quis sed dolorem.",
        },
        {
            title: "User Interaction",
            color: "bg-pink-100",
            icon: <Users className='h-4 w-4' />,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos provident quisquam esse doloremque adipisci consequatur illo quis sed dolorem.",
        },
        {
            title: "Security Assurance",
            color: "bg-purple-100",
            icon: <ShieldCheck className='h-4 w-4' />,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos provident quisquam esse doloremque adipisci consequatur illo quis sed dolorem.",
        },
        {
            title: "Video Content",
            color: "bg-green-100",
            icon: <Video className='h-4 w-4' />,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos provident quisquam esse doloremque adipisci consequatur illo quis sed dolorem.",
        },
    ];

    return (
        <div className=' flex flex-col gap-10 py-10'>
            <div className=' mx-auto flex flex-col items-center justify-center text-center gap-5'>
                <Badge className=' bg-yellow-100 text-yellow-500 uppercase'>Features</Badge>
                <h1 className=' text-4xl font-semibold'>Explore Our Features</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {features.map((item, index) => (
                    <Card key={index} className='flex flex-col gap-3 items-center justify-center text-center border-none drop-shadow-xl rounded-xl'>
                        <CardHeader>
                            <div className={`${item.color} rounded-full h-12 w-12 flex flex-col justify-center items-center`}>
                                {item.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h2 className='text-lg font-semibold'>{item.title}</h2>
                            <p className='text-muted-foreground text-sm'>{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FeaturedSection;
