import FloatingButton from "@/components/shared/FloatingButton";
import SpaceCard from "@/components/shared/SpaceCard";
import SpacesHeader from "@/components/spaces/SpacesHeader";
import { spaces } from "@/constants";
import Link from "next/link";


export default function Spaces() {

    return (
        <main className=' container mx-auto  py-4'>
            <SpacesHeader />
            <div className="mt-8">
               <FloatingButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {spaces.map((space, index) => (
                    <div key={index}>
                        <SpaceCard id={space.id} title={space.title}
                            description={space.description} image={space.image}
                            location={space.location} price={space.price}
                            features={space.features} type={space.type} />
                    </div>
                ))}
            </div>
        </main>
    )
}
