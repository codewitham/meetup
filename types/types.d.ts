interface User {
    id: string,
    clerkId: string,
    name: string,
    email: string,
    imageUrl: string
}

interface createUser {
    clerkId: string,
    email: string,
    name: string,
    imageUrl: string
}

interface updateUser {
    id: string,
    name: string,
    imageUrl: string
}

interface Webinar {
    id: string;
    title: string;
    description: string;
    datetime: Date;
    maxPersons: number;
    organizerId: string;
    isPaid: boolean;
    thumbnail: string;
}

interface CreateWebinar {
    title: string;
    description: string;
    datetime: Date;
    maxPersons: number;
    isPaid: boolean;
    thumbnail: string;
}
