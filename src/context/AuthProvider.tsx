"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { Session, SupabaseClient, User } from "@supabase/supabase-js"

type AuthContext = {
    supabase: SupabaseClient
    session: Session | null
    user: User | null
    loading: boolean
}

const AuthContext = createContext<AuthContext | undefined>(undefined)

export default function AuthProvider({
    children,
    session,
}: {
    children: React.ReactNode
    session: Session | null
}) {
    const [supabase] = useState(() => createClient())
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (session) {
            setLoading(true)
            supabase.auth
                .getUser()
                .then(({ data }) => {
                    setUser(data.user)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [session])

    return (
        <AuthContext.Provider value={{ supabase, user, session, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider")
    }
    return context
}
