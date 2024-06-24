import Image from "next/image";
import Header from "./Header";
import Link from "next/link";
import { MovingBorderButton } from "./shared/MovingBorderButton";

export default function Hero() {
    return (
        <section id="hero" className="py-4">
            <Header />

            <div className="bg-darkSlateGray text-white py-20 px-10 flex flex-col md:flex-row items-center justify-center min-h-screen relative">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-darkSlateGray to-transparent opacity-70"></div>

                {/* Text Content */}
                <div className="z-10 text-center md:text-left max-w-4xl md:w-1/2 mb-12 md:mb-0 md:mr-8">
                    <h1 className="text-5xl font-bold mb-4">Discover & Share Amazing Spaces with <span className=" primary-color">IShare</span>Mate</h1>
                    <p className="text-xl mb-8">
                        Join a community where you can find the perfect space or list yours for others. From coworking areas to cozy apartments, we bring people together.
                    </p>

                    <Link href="/sign-up" className="bg-primary-blue hover:bg-primary-green text-white font-bold py-3 px-6 rounded-full">
                        <MovingBorderButton title="Join the Community" />
                    </Link>

                </div>

                {/* Image */}
                <div className="z-10 max-w-full md:w-1/2">
                    <div className=' relative h-fit w-fit'>
                        <Image
                            src='/elena-rabkina-eVVzwsNhNf4-unsplash.jpg'
                            alt='about-image'
                            height={400}
                            width={400}
                            className=' object-cover border-4'
                        />
                        <Image
                            src='/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg'
                            alt='about-image'
                            height={300}
                            width={300}
                            className='absolute top-[70%] left-1/2 border-4 object-cover hidden lg:block'
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}
