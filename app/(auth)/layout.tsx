
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";

import '../globals.css'
export const metadata ={
    title:'Threads',
    description: 'a next project'
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({children}:{children: React.ReactNode}){

    <ClerkProvider>
        <html>
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>

    </ClerkProvider>

}