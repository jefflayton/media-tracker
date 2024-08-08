import { Inter } from "next/font/google"
import { Suspense } from "react"

import NavigationBar from "@/components/NavigationBar/NavigationBar"
import { createClient } from "@/utils/supabase/server"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = createClient()
    const {
        data: { session },
    } = await supabase.auth.getSession()

    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers session={session}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <NavigationBar />
                    </Suspense>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
