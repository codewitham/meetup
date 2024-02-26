'use client';
import React, { ChangeEvent } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// import 'react-datetime-picker/dist/DateTimePicker.css';
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';
// import DateTimePicker from "react-datetime-picker";
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import { createWebinar } from '@/lib/actions/webinar.actions';
import { toast } from '../ui/use-toast';
import moment from 'moment';

const formSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    description: z.string().min(5, {
        message: 'Description must be at least 5 characters.',
    }),
    datetime: z.date({
        required_error: 'A date and time are required.',
    }),
    maxPersons: z.number().min(10, {
        message: 'Minimum persons must be at least 1.',
    }),
    isPaid: z.boolean(),
    thumbnail: z.string(),
});

const WebinarForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            datetime: new Date(),
            maxPersons: 10,
            isPaid: false,
            thumbnail: 'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        const res = await createWebinar(values);
        console.log(res);
        if (res.message) {
            return toast({ title: res.message })
        }
        return toast({ title: res.error })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormDescription>This is the title of the webinar.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="datetime"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date and Time</FormLabel>
                            <Input
                                name="datetime"
                                type="datetime-local"
                                onChange={(e) => {
                                    const dateValue = e.target.value;
                                    // Convert the string value to a Date object
                                    const dateObject = new Date(dateValue);
                                    // Adjust for local time zone offset
                                    // const localDate = new Date(dateObject.getTime() + (dateObject.getTimezoneOffset() * 60000));
                                    // Set the field value to the adjusted Date object
                                    field.onChange(dateObject);
                                }}
                                value={field.value ? new Date(field.value.getTime() - (field.value.getTimezoneOffset() * 60000)).toISOString().slice(0, 16) : ''}
                            />


                            <FormDescription className=' mt-2'>
                                Select the date and time for the webinar.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className=' md:col-span-2'>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormDescription>
                                Provide a detailed description of the webinar.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="maxPersons"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Maximum Persons</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter max persons"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => field.onChange(parseInt(e.target.value))}
                                    value={field.value}
                                />
                            </FormControl>
                            <FormDescription>
                                Specify the maximum number of persons allowed in the webinar.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="isPaid"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Is Paid?</FormLabel>
                            <FormControl>
                                <Checkbox
                                    className='ml-2'
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormDescription>Check if the webinar is paid.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Thumbnail</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter thumbnail URL" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter the URL for the webinar thumbnail.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className=' md:col-span-2'>
                    <Button type="submit" className="col-span-2">
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default WebinarForm;
