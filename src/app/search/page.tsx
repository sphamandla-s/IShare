import GoogleMaps from '@/components/GoogleMaps'
import Listings from '@/components/Listings'
import FloatingButton from '@/components/shared/FloatingButton'
import GoogleSearch from '@/components/shared/GoogleSearch'
import SpacesHeader from '@/components/spaces/SpacesHeader'
import { spaces } from '@/constants'
import React from 'react'

export default function page() {
    return (


        <main className='py-4 container mx-auto'>
            <SpacesHeader />


            <FloatingButton />
            <div className=' grid grid-cols-1 md:grid-cols-2 mt-5'>

                <div className=''>
                    <div className=' py-3'>
                        <GoogleSearch />
                    </div>
                    <Listings data={spaces} />
                </div>
                <div className='hidden md:flex fixed right-1 h-full w-[650px]'>
                    <GoogleMaps />
                </div>
            </div>
        </main>
    )
}
