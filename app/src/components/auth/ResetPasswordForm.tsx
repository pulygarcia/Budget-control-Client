'use client'

import { resetPassword } from "@/app/actions/reset-password-action"
import Link from "next/link"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function ResetPasswordForm() {

    const initialState = {
        errors:[],
        successMessage: ''
    }

    const [state, formAction] = useActionState(resetPassword, initialState)

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
                    >Your token</label>
            
                    <input
                        type="text"
                        placeholder="Token"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="code"
                    />
                </div>
            
                <input 
                    type="submit"
                    value='Send'
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