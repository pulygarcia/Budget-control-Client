'use client'
import Link from "next/link";

export default function RegisterForm() {
    return (
        <>
            <form
                className="mt-14 space-y-5"
                noValidate
            >
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