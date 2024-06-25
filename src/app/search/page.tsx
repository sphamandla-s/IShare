import Listings from '@/components/Listings'
import SpacesHeader from '@/components/spaces/SpacesHeader'
import { spaces } from '@/constants'
import React from 'react'

export default function page() {
    return (


        <main className='py-4'>
            <SpacesHeader />

            <div className=' grid grid-cols-1 md:grid-cols-2 mt-5'>
                <div className=''>
                   <Listings data={spaces} />
                </div>
                <div className='hidden md:flex'>
                    Map
                </div>
            </div>
        </main>
    )
}
