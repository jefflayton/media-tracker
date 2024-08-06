import { Inter } from "next/font/google"
import { Suspense } from "react"

import NavigationBar from "@/components/NavigationBar/NavigationBar"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Suspense fallback={<div>Loading...</div>}>
                        <NavigationBar />
                    </Suspense>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
