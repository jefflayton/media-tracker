"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"
import { createClient } from "@/utils/supabase/client"

interface UserContextValue {
    user: User | null
    loading: boolean
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const supabase = createClient()

    useEffect(() => {
        async function getUser() {
            const { data, error } = await supabase.auth.getUser()
            if (error) {
                throw error
            }

            if (data.user) {
                setUser(data.user)
            }
            setLoading(false)
        }

        getUser()
    }, [supabase])

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}
