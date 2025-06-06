"use client"

import { updateProfileData } from "@/app/actions/update-profile-data-action";
import { useState, useEffect, useActionState } from "react";
import {toast} from 'react-toastify'

type ProfileData = {
    username: string,
    email:string,
    id:number
}

export default function ProfileForm({profileData}:{profileData: ProfileData}) {
    const [username, setUsername] = useState(profileData.username);
    const [email, setEmail] = useState(profileData.email);  

    const initialState = {
        errors: [],
        successMessage: ''
    }
    
    const [state, formAction] = useActionState(updateProfileData, initialState);

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
          >Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="username"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label
            className="font-semibold text-cyan-700"
          >Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="email"
          />
        </div>

        <input
          type="submit"
          value='Save changes'
          className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
        />
      </form>
    </>
  )
}