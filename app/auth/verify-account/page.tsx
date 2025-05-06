'use client'

import { useRouter } from "next/navigation";
import { verifyAccount } from "../../actions/verifyAccount-action";
import { useActionState, useEffect } from "react";

export default function VerifyAccount() {
    const router = useRouter();

    const initialState = {
        errors: [],
        successMessage: ''
    }

    const [state, formAction] = useActionState(verifyAccount, initialState)

    useEffect(() => {
        if(state.successMessage){
            setTimeout(() => {
                router.push('/auth/login')
            }, 1000);
        }
    },[state.successMessage])

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white p-10">

      <h1 className="text-3xl font-bold text-center text-cyan-800 mb-6">
        Verify Your Account
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Please enter the verification code we sent to your email address.
      </p>

        {/* Success message */}
        {state.successMessage !== '' ? <p className="bg-green-100 text-green-800 p-3 rounded-lg text-center font-semibold my-5">{state.successMessage}</p> : null}

      <form 
        action={formAction}
      >
          <div className="flex flex-col gap-3">
            <label htmlFor="code" className="text-xl font-semibold">
              Verification Code
            </label>
            <input
              id="code"
              name="code"
              type="text"
              placeholder="Enter your code"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />

            {state.errors.length > 0 && (
                <div>
                    {state.errors.map((error, key) => <p className="text-red-500" key={key}>{error}</p>)}
                </div>
            )}

            <button
                type="submit"
                className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white font-black text-xl mt-4"
            >
              Verify Account
            </button>
          </div>
      </form>
    </div>
  );
}
