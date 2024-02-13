import Footer from '@/components/Footer/Footer'
import ClientReviews from '@/components/Landing/ClientReviews'
import FeaturedSection from '@/components/Landing/FeaturedSection'
import FeaturedWebinars from '@/components/Landing/FeaturedWebinars'
import HeroSection from '@/components/Landing/HeroSection'
import InstructionsSection from '@/components/Landing/InstructionsSection'
import RoomForm from '@/components/Landing/RoomForm'
import SubscribeSection from '@/components/Landing/SubscribeSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroSection />
            <div className=' container mx-auto flex flex-col gap-20 mb-20'>
                <FeaturedSection />
                <FeaturedWebinars />
                <InstructionsSection />
                <ClientReviews />
                {/* <RoomForm /> */}
            </div>
            <SubscribeSection />
            <Footer />
        </div>
    )
}

export default page