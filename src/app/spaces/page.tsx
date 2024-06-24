import SpacesHeader from "@/components/spaces/SpacesHeader";
import { spaces } from "@/constants";
import Image from "next/image";


export default function Spaces() {
  

    return (
        <main className=' container mx-auto  py-4'>
            <SpacesHeader />


            <div className="flex flex-wrap gap-8 mt-8 justify-center">
                {spaces.map(space => (
                    <div key={space.id} className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden w-full sm:w-60 md:w-80 lg:w-1/4">
                        <Image
                            src={space.image}
                            alt={space.title}
                            width={320}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{space.description}</p>
                            <span className="text-primary-blue dark:text-primary-green font-semibold">{space.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
