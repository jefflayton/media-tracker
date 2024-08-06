"use client"

import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react"
import { Suspense } from "react"
import { useUser } from "@/context/UserContext"

export default function ProfileDropdown() {
    const { user, loading } = useUser()

    return (
        <>
            {!loading || user ? (
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
                    <NavbarItem>
                        <Link href="/login">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="/signup"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </>
            )}
        </>
    )
}
