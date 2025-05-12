'use client'

import { createNewPassword } from "@/app/actions/new-password-action"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import {useRouter} from 'next/navigation'

export default function NewPasswordForm() {
    const routeParams = useParams();
    const token = routeParams.token;
    //console.log(routeParams.token)
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            toast.error("Invalid or missing token");
            router.push("/auth/login");
        }
    }, [token]);

    const initialState = {
        errors:[],
        successMessage: ''
    }
    
    const createPasswordWithToken = createNewPassword.bind(null, token)
    const [state, formAction] = useActionState(createPasswordWithToken, initialState);

    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach(error => toast.error(error))
        }
        if (state.successMessage) {
            toast.success(state.successMessage);
            router.push('/auth/login')
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
                    >New password</label>
            
                    <input
                        type="password"
                        placeholder="*************"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="password"
                    />

                    <label
                    className="font-bold text-2xl"
                    >Repeat password</label>
            
                    <input
                        type="password"
                        placeholder="Repeat password"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="password_confirmation"
                    />
                    {/* TOKEN(6 digits code received) WILL BE SENT TO SERVER ACTION BY HIDDEN FIELD */}
                    {/* <input
                        type="hidden"
                        name="token"
                        value={token}
                    /> */}
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