import ResetPasswordForm from "@/app/src/components/auth/ResetPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Budgets control - Reset password",
    description: "Made by Puly",
};

export default function ResetPassword() {
    return (
        <>
            <h1 className="font-black text-6xl text-cyan-700">Enter the token we sent you</h1>

            <ResetPasswordForm />
        </>
    );
}