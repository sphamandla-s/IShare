import type { Metadata } from "next";
import { cn } from "@/lib/utils";




export const metadata: Metadata = {
    title: "IShareMate - Connect, Share, Live",
    description: "Discover and share spaces with like-minded individuals. From coworking to coliving, IShareMate connects you with spaces and people that match your lifestyle. Join our community today and find your perfect space!",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(
                "bg-red")}
            >{children}</body>
        </html>
    );
}
