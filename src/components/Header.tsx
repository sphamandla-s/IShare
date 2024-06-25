import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { MovingBorderButton } from './shared/MovingBorderButton'
import { Menu } from 'lucide-react'
import { Button } from "./ui/button"

export default function Header() {
    return (
        <header className=' my-6'>
            <nav className=' flex items-center justify-between'>
                <h3 className=" text-2xl "><span className=" primary-color font-bold">IShare</span>Mate</h3>

                
                <ul className=' hidden lg:flex justify-center items-center gap-5'>
                    {NAV_LINKS.map((link, index) => (
                        <li key={index}><Link href={link.href}>{link.title}</Link></li>
                    ))}
                </ul>

                <div className=' lg:flex justify-between items-center gap-4 hidden'>
                    {/* <MovingBorderButton title='Sign In' /> */}

                    <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <Link href='/sign-in'>Sign In</Link>
                    </button>

                    <Link href='sign-up'>Join Us</Link>
                </div>

                <Sheet >
                <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden bg-gray-900"
                        >
                            <Menu className="h-5 w-5 text-white" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle></SheetTitle>
                            <SheetDescription className="flex flex-col justify-center items-center">
                                <ul className=" flex flex-col justify-between items-left gap-6">
                                    {NAV_LINKS.map((link, index) => (
                                        <li key={index}><Link href={link.href}>{link.title}</Link></li>
                                    ))}
                                </ul>
                                <div className='flex flex-col justify-between items-center gap-4 mt-4'>

                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <Link href='/sign-in'>Sign In</Link>
                                    </button>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>


            </nav>
        </header>
    )
}
