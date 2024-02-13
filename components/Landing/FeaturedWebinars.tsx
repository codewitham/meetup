import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight, DollarSign, Dot, Eye } from 'lucide-react';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const FeaturedWebinars = () => {
    const numCards = 8; // Set the desired number of cards

    return (
        <div className='  flex flex-col gap-10 py-10'>
            <div className=' mx-auto flex flex-col items-center justify-center text-center gap-5'>
                <Badge className=' bg-yellow-100 text-yellow-500 uppercase'>Browse</Badge>
                <h1 className=' text-4xl font-semibold'>Browse Trending</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {Array.from({ length: numCards }, (_, index) => (
                    <div key={index} className=' flex flex-col gap-3 rounded-lg'>
                        <div className=' relative overflow-hidden rounded-md'>
                            <img src={`/thumbnails/thumbnail${index + 3}.png`} alt={`thumbnail ${index + 1}`} />

                            <div className=' absolute top-0 left-0 h-full w-full bg-black/20'>

                            </div>
                            <div className=' absolute top-2 left-2'>
                                <Badge className='  bg-yellow-400 text-white text-xs font-normal ' variant={"secondary"} >Webinar</Badge>
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <Link href={"/"} className=' text-lg font-medium hover:underline'>
                                Video Editing Agency
                            </Link>
                            <div className=' text-xs text-muted-foreground flex items-center'>
                                6:00pm today
                            </div>
                        </div>

                        <div className=' flex items-center gap-5 justify-between'>
                            <div >
                                $19.00
                            </div>
                            <Button size={"icon"} variant={"ghost"} >
                                <ArrowRight className='  h-4 w-4' />
                            </Button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default FeaturedWebinars;