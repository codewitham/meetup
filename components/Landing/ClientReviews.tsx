import React from 'react';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const ClientReviews = () => {
    const reviews = [
        {
            image: "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "John Doe",
            work: "Web Developer",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel neque eu justo gravida blandit vel ut ipsum."
        },
        {
            image: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Jane Smith",
            work: "Graphic Designer",
            review: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tincidunt dui in dapibus tempus."
        },
        {
            image: "https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Alex Johnson",
            work: "Marketing Specialist",
            review: "Sed imperdiet, libero ut cursus lacinia, orci dui feugiat ex, eu sollicitudin ex elit vitae elit. Vivamus nec massa vel turpis vestibulum tincidunt."
        },
        {
            image: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Emily Williams",
            work: "UX/UI Designer",
            review: "Nullam nec purus quis purus placerat mattis. Nam vel nisi ut justo aliquet hendrerit. Nullam tristique, velit ac consequat fringilla, purus neque vestibulum odio, non vestibulum lectus lacus ac orci."
        },
    ];

    return (
        <div className='flex flex-col gap-10 py-10'>
            <div className='mx-auto flex flex-col items-center justify-center text-center gap-5'>
                <Badge className='bg-yellow-100 text-yellow-500 uppercase'>Client Reviews</Badge>
                <h1 className='text-4xl font-semibold'>Over 2k+ Happy Clients</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {reviews.map((review, index) => (
                    <Card key={index} className='bg-white p-5 rounded-lg drop-shadow-xl flex justify-start gap-5 border-0 border-t-8 border-yellow-300'>
                        <Avatar>
                            <AvatarImage src={review.image} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className=' flex flex-col gap-2 justify-between text-sm'>
                            <p className='text-muted-foreground mt-2 '>{review.review}</p>
                            <h2 className=' font-semibold'>{review.name}</h2>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ClientReviews;
