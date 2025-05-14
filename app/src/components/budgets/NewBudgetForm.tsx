'use client'

import { addNewBudget } from "@/app/actions/new-budget-action";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function NewBudgetForm() {
    const initialState = {
        errors: [],
        successMessage: ''
    }

    const [state, formAction] = useActionState(addNewBudget, initialState);

    useEffect(() => {
        if(state.errors.length > 0){
            state.errors.map(error => toast.error(error))
        }

        if(state.successMessage){
            toast.success(state.successMessage)
        }
    },[state])

    return (
        <form 
            action={formAction}
            className="bg-white p-6 rounded-lg shadow-md space-y-5"
        >
            <div>
              <label
                htmlFor="name"
                className="block text-cyan-700 font-semibold mb-2"
              >
                Budget Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Marketing Budget"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
    
            <div>
              <label
                htmlFor="amount"
                className="block text-cyan-700 font-semibold mb-2"
              >
                Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                placeholder="e.g. 1500"
                min="1"
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
    
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg w-full cursor-pointer"
            >
              Save Budget
            </button>
          </form>
      );
  }