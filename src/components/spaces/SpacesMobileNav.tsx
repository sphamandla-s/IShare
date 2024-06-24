import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { spaces_links } from '@/constants'

export default function SpacesMobileNav() {
    return (
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

                    {spaces_links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-foreground">
                            {link.title}
                        </Link>))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}
