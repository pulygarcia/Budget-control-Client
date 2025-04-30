import RegisterForm from "@/app/src/components/auth/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Budgets control - Register",
    description: "Made by Puly",
};

export default function Register() {
    return (
        <>
            <h1 className="font-black text-6xl text-cyan-700">Create your account</h1>
            <p className="text-3xl font-bold">Manage <span className="text-lime-500">your financial assets</span></p>

            <RegisterForm />
        </>
    );
}