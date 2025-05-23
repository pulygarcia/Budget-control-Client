'use client'

import { forgotPassword } from "@/app/actions/forgot-password-action"
import Link from "next/link"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function ForgotPasswordForm() {

    const initialState = {
        errors:[],
        successMessage: ''
    }

    const [state, formAction] = useActionState(forgotPassword, initialState)

    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach(error => toast.error(error))
        }
        if (state.successMessage) {
            toast.success(state.successMessage)
        }
    }, [state])

    return (
        <>
            <form 
                action={formAction}
                className=" mt-14 space-y-5"
                noValidate
            >
                <div className="flex flex-col gap-2 mb-10">
                    <label
                    className="font-bold text-2xl"
                    >Email</label>
            
                    <input
                        type="email"
                        placeholder="Register Email"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="email"
                    />
                </div>
            
                <input 
                    type="submit"
                    value='Send Instructions'
                    className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer "
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

            <p className="mt-6 text-center text-lg">
            Don&apos;t have an account?{' '}
            <Link
                href="/auth/register"
                className="text-cyan-700 hover:underline font-semibold"
            >
                Create your account
            </Link>
            </p>
        </>
    )
}