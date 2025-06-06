"use client"

import { modifyPassword } from "@/app/actions/modify-password-action"
import { useActionState, useEffect } from "react"
import {toast} from 'react-toastify'

export default function ChangePasswordForm() {

    const initialState = {
        errors: [],
        successMessage: ''
    }

    const [state, formAction] = useActionState(modifyPassword, initialState);

    useEffect(() => {
        if(state.errors.length > 0){
            state.errors.map(error => toast.error(error))
        }
        
        if(state.successMessage){
            toast.success(state.successMessage)
        }
    },[state])

  return (
    <>
      <form
        action={formAction}
        className=" mt-14 bg-white p-6 rounded-lg shadow-md space-y-5"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label
            className="font-semibold text-cyan-700"
            htmlFor="current_password"
          >Current password</label>
          <input
            id="current_password"
            type="password"
            placeholder="Current password"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="current_password"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label
            className="font-semibold text-cyan-700"
            htmlFor="password"
          >New Password</label>
          <input
            id="password"
            type="password"
            placeholder="Register password"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="password"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label
            htmlFor="password_confirmation"
            className="font-semibold text-cyan-700"
          >Repetir Password</label>

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
          value='Change Password'
          className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
        />
      </form>
    </>
  )
}