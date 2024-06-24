'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { spaces } from '@/constants';
import { useUser } from '@clerk/nextjs';
import { Menu, Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Spaces() {
    const { isLoaded, isSignedIn, user } = useUser();
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <main className=' container mx-auto  py-4'>
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 overflow-hidden">

                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="/spaces"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <h3 className=" text-2xl "><span className=" primary-color font-bold">IShare</span>Mate</h3>

                    </Link>
                    <Link href="/spaces" className="text-foreground hover:text-primary-green">Spaces</Link>
                    <Link href="/post" className="text-foreground hover:text-primary-green">List a Space</Link>
                    <Link href="/community" className="text-foreground hover:text-primary-green">Community</Link>
                    <Link href="/help" className="text-foreground hover:text-primary-green">Help</Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="/spaces"
                                className="flex items-center gap-2 text-lg font-semibold md:text-base"
                            >
                                <h3 className=" text-2xl "><span className=" primary-color font-bold">IShare</span>Mate</h3>

                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </Link>
                            <Link href="#" className="hover:text-foreground">
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        ) : (
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        )}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <Avatar>
                                    <AvatarImage src={user.imageUrl} />
                                    <AvatarFallback>{user?.firstName ? user.firstName[0] : ''}{user?.lastName ? user.lastName[0] : ''}</AvatarFallback>
                                </Avatar>
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>


            <div className=' mt-8'>

            </div>
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
