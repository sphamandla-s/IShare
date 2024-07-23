import NewListingForm from '@/components/NewListingForm'
import SpacesHeader from '@/components/spaces/SpacesHeader'
import Image from 'next/image'
import React from 'react'

function NewListing() {
  return (
    <main className=' container mx-auto  py-4'>
      <SpacesHeader />
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto">
          <div className="mx-auto flex size-full flex-col py-10 max-w-[860px] flex-1 justify-between">

            <NewListingForm />

            <p className="text-14-regular justify-items-end text-center text-dark-600 xl:text-left mt-10 py-12">© 2024 IShareMate</p>
          </div>
        </section>

        <Image
          src="/Blogging-bro.svg"
          width="1920"
          height="1080"
          alt="appointment"
          className="hidden h-full w-full  object-cover lg:block"
        />
      </div>
    </main>

  )

};

export default NewListing