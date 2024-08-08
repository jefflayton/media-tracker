"use client"

import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    NavbarItem,
    Link,
} from "@nextui-org/react"
import { usePathname } from "next/navigation"

import { useAuth } from "@/context/AuthProvider"

export default function ProfileDropdown() {
    const { user, loading } = useAuth()

    const pathname = usePathname()

    return (
        <>
            {loading ? (
                <Avatar name="..." />
            ) : user ? (
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar name={user?.email} />
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem>Profile</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem>
                            <Link
                                // className="text-danger"
                                color="danger"
                                href="/auth/signout"
                            >
                                Sign Out
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            ) : (
                <>
                    {pathname !== "/login" && (
                        <NavbarItem>
                            <Link href="/login">Login</Link>
                        </NavbarItem>
                    )}
                    {pathname !== "/signup" && (
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="/signup"
                                variant="bordered"
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                    )}
                </>
            )}
        </>
    )
}
