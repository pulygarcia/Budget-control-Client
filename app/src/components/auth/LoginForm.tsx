'use client'

import Link from "next/link"

export default function LoginForm() {
    return (
        <>
            <form
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