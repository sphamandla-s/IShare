import Link from 'next/link'
import React from 'react'
import SpacesMobileNav from './SpacesMobileNav'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import ToggleTheme from '../shared/ToggleTheme'
import { spaces_links } from '@/constants'
import User from '../shared/User'

export default  function SpacesHeader() {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 overflow-hidden">

            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full">
                <Link
                    href="/spaces"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <h3 className=" text-2xl "><span className=" primary-color font-bold">IShare</span>Mate</h3>

                </Link>
                {spaces_links.map((link, index)=>(
                    <Link
                    key={index}
                    href={link.href}
                    className="text-foreground transition-colors hover:text-foreground"
                >
                    {link.title}
                </Link>
                ))}
                
                
            </nav>
            <SpacesMobileNav />
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search Spaces..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <ToggleTheme />
               <User />
            </div>
        </header>
    )
}
