import { NextUIProvider } from "@nextui-org/react"
import AuthProvider from "@/context/AuthProvider"
import AuthListener from "@/context/AuthListener"
import { Session } from "@supabase/supabase-js"

export function Providers({
    children,
    session,
}: {
    children: React.ReactNode
    session: Session | null
}) {
    return (
        <NextUIProvider>
            <AuthProvider session={session}>
                <AuthListener serverAccessToken={session?.access_token} />
                {children}
            </AuthProvider>
        </NextUIProvider>
    )
}
