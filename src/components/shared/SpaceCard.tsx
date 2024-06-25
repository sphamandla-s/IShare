import { ListingsData } from '@/types';
import { MapPin, Wifi, Settings, Calendar, RockingChair } from 'lucide-react'; // Icons for features
import Image from 'next/image';
import React from 'react';


export default function SpaceCard({
    id,
    title,
    description,
    image,
    location,
    price,
    features,
    type
}: ListingsData) {
    return (
        <div className='bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden w-full flex flex-col justify-between hover:scale-105 ease-in-out transition-all'>
            <Image
                src={image}
                alt={title}
                width={320}
                height={200}
                className="w-full h-48 object-cover"
            />
            <div className='mt-4 px-4'>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{type}</span>
                <h2 className='font-bold text-xl mb-2'>{title}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2'>{description}</p>
                <div className='flex items-center text-gray-600 dark:text-gray-400 mb-4'>
                    <MapPin className='h-5 w-5 mr-1' />
                    <span>{location}</span>
                </div>
                <h2 className='flex items-center text-sm text-gray-400 mb-4'>From {price}/per month</h2>

            </div>
        </div>
    );
}
