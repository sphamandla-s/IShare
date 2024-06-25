import React from 'react'
import SpaceCard from './shared/SpaceCard';
import { ListingsData } from '@/types';
import Link from 'next/link';




export default function Listings({ data }: { data: ListingsData[] }) {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto'>
            {data.map((space, index) => (
                <Link href={`space:${space.id}`} key={index}>
                    <SpaceCard id={space.id} title={space.title}
                        description={space.description} image={space.image}
                        location={space.location} price={space.price}
                        features={space.features} type={space.type} />
                </Link>
            ))}
        </div>
    )
}
