import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}

export default AuthProvider