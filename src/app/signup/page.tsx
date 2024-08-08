"use server"

import { Button, Input } from "@nextui-org/react"
// import { useState } from "react"

import { signup } from "./actions"
import EyeFilledIcon from "./EyeFilledIcon"
import EyeSlashFilledIcon from "./EyeSlashFilledIcon"

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    await signup(data)
}

export default async function SignupPage() {
    // const [isVisible, setIsVisible] = useState<boolean>(false)
    let isVisible = false
    const toggleVisibility = () => {
        isVisible = !isVisible
    }

    // const toggleVisibility = () => setIsVisible(!isVisible)
    return (
        <form
            className="flex flex-col items-center justify-center"
            // onSubmit={handleSubmit}
        >
            <div className="flex flex-row items-center justify-center gap-4 m-2">
                <Input
                    className="max-w-md"
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    variant="bordered"
                />
                <Input
                    className="max-w-md"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    variant="bordered"
                />
            </div>
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
                        // onClick={toggleVisibility}
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
