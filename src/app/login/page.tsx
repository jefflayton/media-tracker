"use client";

import { login, signup } from "./actions";

import { Box, Button, Grid, Link, TextField } from "@mui/material";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data);
};

const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signup(data);
};

export default function LoginPage() {
    return (
        <Box
            className="m-10 flex flex-col items-center justify-center"
            component="form"
            onSubmit={handleSubmit}
        >
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                autoFocus
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
                Login
            </Button>
            <Grid container direction="row">
                <Grid item xs>
                    <Button>Forgot password?</Button>
                </Grid>
                <Grid item>
                    <Button>Create an account</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
