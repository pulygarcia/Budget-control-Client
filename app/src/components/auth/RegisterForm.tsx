'use client'

import { registerUser } from "@/app/actions/register-action";
import Link from "next/link";
import { useActionState } from "react";
import FormError from "../FormError";

const initialState = {
    errors: [],
    successMessage: ''
}

export default function RegisterForm() { //TODO: avoid automatic form reset when submit tough there is an error
    const [state, formAction] = useActionState(registerUser, initialState);

    return (
        <>
            <form
                className="mt-14 space-y-5"
                action={formAction}
                noValidate
            >
                {/* SUCCESS MESSAGE */}
                {state.successMessage && (
                    <p className="bg-green-100 text-green-800 p-3 rounded-lg text-center font-semibold">
                        {state.successMessage}
                    </p>
                )}
                {/* ERROR MESSAGE */}
                {state.errors.some(error => error.field === "server") && (
                    <p className="bg-red-100 text-red-800 p-3 rounded-lg text-center font-semibold">
                        {state.errors.find(error => error.field === "server")?.message}
                    </p>
                )}

                <div className="flex flex-col gap-2">
                    <label
                        className="font-bold text-2xl"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email of register"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="email"
                    />

                    {state.errors.some(error => error.field === "email") && (
                        <FormError>
                            {state.errors.find(error => error.field === "email")?.message}
                        </FormError>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-bold text-2xl"
                    >Name</label>
                    <input
                        type="name"
                        placeholder="Name of register"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="name"
                    />
                    {state.errors.some(error => error.field === "name") && (
                        <FormError>
                            {state.errors.find(error => error.field === "name")?.message}
                        </FormError>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-bold text-2xl"
                    >Password</label>
                    <input
                        type="password"
                        placeholder="Register password"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="password"
                    />
                    {state.errors.some(error => error.field === "password") && (
                        <FormError>
                            {state.errors.find(error => error.field === "password")?.message}
                        </FormError>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-bold text-2xl"
                    >Repeat Password</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repeat register password"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="password_confirmation"
                    />
                    {state.errors.some(error => error.field === "password_confirmation") && (
                        <FormError>
                            {state.errors.find(error => error.field === "password_confirmation")?.message}
                        </FormError>
                    )}
                </div>

                <input
                    type="submit"
                    value='Create account'
                    className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
                />
            </form>

            <p className="mt-6 text-center text-lg">
                Have an account?{' '}
                <Link
                    href="/auth/login"
                    className="text-cyan-700 hover:underline font-semibold"
                >
                    Login
                </Link>
            </p>
        </>
    );
}