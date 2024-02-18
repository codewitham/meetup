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