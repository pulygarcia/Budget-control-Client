'use client'

import { useActionState, useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { getBudgetById } from "@/app/lib/budgets/budgetsFetching";
import { BudgetAPIResponse } from "@/app/lib/schemas/budget-schema";
import { addExpense } from "@/app/actions/create-expense-action";
import {toast} from 'react-toastify'
import { useRouter } from "next/navigation";

export default function NewExpenseForm(){
    const [budget, setBudget] = useState<BudgetAPIResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const id = useParams().id as string;
    const router = useRouter();

    const initialState = {
        errors: [],
        successMessage: ''
    }

    const addExpenseToBudget = addExpense.bind(null, id)
    const [state, formAction] = useActionState(addExpenseToBudget, initialState);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getBudgetById(id);
                setBudget(data);
            } catch (error: any) {
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        }    

        fetchData();
    
    },[id])

    
    useEffect(() => {
        if(state.errors.length > 0){
            state.errors.map(error => toast.error(error))
        }
        
        if(state.successMessage){
            toast.success(state.successMessage)
            router.push('/admin/budgets/'+ id)
        }
    },[state])

    if(loading){
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="w-10 h-10 border-4 border-t-cyan-600 border-gray-300 rounded-full animate-spin" />
            </div>
        );
    }
        
    return (
        <>
            <h1 className="text-3xl font-black text-cyan-700 mb-5">Create New Expense for <span className="text-black dark:text-white">{budget?.name}</span> Budget</h1>

            <form
                action={formAction}
                className="bg-white p-6 rounded-lg shadow-md space-y-5"
            >
                <div>
                    <label
                    htmlFor="name"
                    className="block text-cyan-700 font-semibold mb-2"
                    >
                    Expense Name
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
                    Add Expense
                </button>
            </form>
        </>
    );
}