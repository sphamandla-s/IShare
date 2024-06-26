// import React from 'react'
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"
// import Link from 'next/link';

// interface TooltipWrapperProps {
//     label: string;
//     href : string;
//     icon : string;
// }

// export default function TooltipWrapper({label, href, icon} : TooltipWrapperProps) {
//   return (
//     <TooltipProvider>
//     <Tooltip>
//         <TooltipTrigger>
//             <Link href={href}>
//                 <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95 opacity-0 animate-fade-in-up animation-delay-200">
//                     <icon className="h-5 w-5" />
//                 </div>
//             </Link>
//         </TooltipTrigger>
//         <TooltipContent>
//             <p>label</p>
//         </TooltipContent>
//     </Tooltip>
// </TooltipProvider>
//   )
// }
