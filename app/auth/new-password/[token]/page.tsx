import NewPasswordForm from "@/app/src/components/auth/NewPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Budgets control - New password",
    description: "Made by Puly",
};

export default function NewPassword() {
    return (
        <>
            <h1 className="font-black text-6xl text-cyan-700">Create your new password</h1>

            <NewPasswordForm />
        </>
    );
}