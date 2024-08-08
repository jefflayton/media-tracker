"use client"

import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react"
import { useState } from "react"
import { usePathname } from "next/navigation"

import ProfileDropdown from "@/components/ProfileDropdown/ProfileDropdown"

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const pathname = usePathname()
    console.log(pathname)

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">Media Tracker</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/games"}>
                    <Link color="foreground" href="/games">
                        Games
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ProfileDropdown />
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link className="w-full" href="/" size="lg">
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full" href="/about" size="lg">
                        About
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}
