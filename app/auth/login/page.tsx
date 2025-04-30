import LoginForm from "@/app/src/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Budgets control - Login",
    description: "Made by Puly",
};

export default function Login() {
    return (
        <>
            <h1 className="font-black text-6xl text-cyan-700">Login</h1>

            <LoginForm />
        </>
    );
}