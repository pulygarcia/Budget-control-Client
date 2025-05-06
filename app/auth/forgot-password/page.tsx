import ForgotPasswordForm from "@/app/src/components/auth/ForgotPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Budgets control - Reset password",
    description: "Made by Puly",
};

export default function ForgotPassword() {
    return (
        <>
            <h1 className="font-black text-6xl text-cyan-700">Reset your password here</h1>

            <ForgotPasswordForm />
        </>
    );
}