'use client'

import { login } from "@/app/actions/login-action"
import Link from "next/link"
import { useActionState } from "react"

export default function LoginForm() {
    const initialState = {
        errors: []
    }

    const [state, formAction] = useActionState(login, initialState)

    return (
        <>
            {state.errors.some(error => error.field === 'server') && (
                <p className="bg-red-100 text-red-800 p-3 rounded-lg text-center font-semibold mt-10">{state.errors.find(error => error.field === 'server')?.message}</p>
            )}

            <form
                action={formAction}
                className="mt-14 space-y-5"
                noValidate
            >
                <div className="flex flex-col gap-2">
                    <label
                        className="font-bold text-2xl"
                    >Email</label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Register email"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="email"
                    />

                    {state.errors.some(error => error.field === 'email') && (
                        <p className="text-red-600">{state.errors.find(error => error.field === 'email')?.message}</p>
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

                    {state.errors.some(error => error.field === 'password') && (
                        <p className="text-red-600">{state.errors.find(error => error.field === 'password')?.message}</p>
                    )}
                </div>

                <input
                    type="submit"
                    value='Login'
                    className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
                />
            </form>

            <p className="mt-6 text-center text-lg">
                Don&apos;t have an account?{' '}
                <Link
                    href="/auth/register"
                    className="text-cyan-700 hover:underline font-semibold"
                >
                    Create your account
                </Link>
            </p>

            <p className="mt-6 text-center text-lg">
                Forgot password?{' '}
                <Link
                    href="/auth/forgot-password"
                    className="text-cyan-700 hover:underline font-semibold"
                >
                    Reset password
                </Link>
            </p>
        </>
    )
}