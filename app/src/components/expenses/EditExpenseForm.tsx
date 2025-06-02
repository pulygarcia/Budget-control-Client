'use client'

import { editExpense } from "@/app/actions/edit-expense-action";
import { ExpenseAPIResponse } from "@/app/lib/schemas/budget-schema";
import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {toast} from 'react-toastify'

export default function EditExpenseForm({ expense }: { expense: ExpenseAPIResponse }){
    const [name, setName] = useState(expense.name);
    const [amount, setAmount] = useState(expense.amount);  
    const router = useRouter()

    const initialState = {
        errors: [],
        successMessage: '',
        finished: false
    }

    const editExpenseWithId = editExpense.bind(null, String(expense.budgetId), +expense.id)
    const [state, formAction] = useActionState(editExpenseWithId, initialState)

    useEffect(() => {
            if(state.errors.length > 0){
                state.errors.map(error => toast.error(error))
            }
    
            if(state.successMessage){
                toast.success(state.successMessage)
            }
    
            if(state.finished){
                router.push(`/admin/budgets/${expense.budgetId}`);
            }
        },[state])

    return(
        <form 
            action={formAction}
            className="bg-white p-6 rounded-lg shadow-md space-y-5 mt-10"
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              Save Changes
            </button>
          </form>
    )
}