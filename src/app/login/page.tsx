"use client"

import { Button, Input } from "@nextui-org/react"
import { useState } from "react"

import { login, signup } from "./actions"
import EyeFilledIcon from "./EyeFilledIcon"
import EyeSlashFilledIcon from "./EyeSlashFilledIcon"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    login(data)
}

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleVisibility = () => setIsVisible(!isVisible)
    return (
        // <div>
        <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
        >
            <Input
                className="max-w-md m-2"
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                variant="bordered"
            />
            <Input
                className="max-w-md m-2"
                label="Password"
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                variant="bordered"
                endContent={
                    <Button
                        isIconOnly
                        className="top-0.5 bg-transparent"
                        // type="button"
                        // variant="light"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                    >
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </Button>
                }
            />
            <Button
                className="max-w-md w-full m-2"
                color="primary"
                type="submit"
            >
                Login
            </Button>
        </form>
        // </div>
    )
}
