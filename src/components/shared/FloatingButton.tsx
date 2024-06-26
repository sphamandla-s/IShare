'use client'

import { Plus, Search, FileText, X } from 'lucide-react'; // Import additional icons
import Link from 'next/link'; // To handle routing
import React, { useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export default function FloatingButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed cursor-pointer bottom-4 right-4 z-50 flex flex-col items-center">

            {isOpen && (
                <div className="flex flex-col items-center mb-2 space-y-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/search">
                                    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95 opacity-0 animate-fade-in-up animation-delay-200">
                                        <Search className="h-5 w-5" />
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Advance Search</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>


                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="/search">
                                    <Link href="/new-listing">
                                        <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95 opacity-0 animate-fade-in-up animation-delay-300">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                    </Link>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>List A New Space</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>



                </div>
            )}


            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            className="relative flex items-center justify-center w-12 h-12 bg-[#F0932B] text-white rounded-full transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Advance Menu</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>




        </div>
    );
}
