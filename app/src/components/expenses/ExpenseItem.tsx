'use client'

import { ExpenseAPIResponse } from "@/app/lib/schemas/budget-schema";
import { useState } from "react";
import { formatCurrency, formatDate } from "../../utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { deleteExpense } from "@/app/lib/expenses/expensesFetching";
import {toast} from 'react-toastify'

type ExpenseItemProps = {
  expense: ExpenseAPIResponse;
  onDelete: (id:string) => void
};


export default function ExpenseItem({expense, onDelete} : ExpenseItemProps){
    const {id} = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async (budgetId:string, expenseId:string) => {
        if(confirm('Expense will be permanently removed, are you sure?')){ //TODO: pending use confirm Modal
            setLoading(true)
            try {
                const response = await deleteExpense(String(budgetId), expense.id);
                toast.success(response.msg);
                onDelete(expenseId)
            } catch (error: any) {
                setError(error.message);
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
    }

    if (loading){
        return (
        <div className="flex items-center justify-center">
            <div
            className="w-10 h-10 border-4 border-t-cyan-600 border-gray-300 rounded-full animate-spin"
            ></div>
        </div>
        );
    }

    return(
        <li
            className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
        >
            <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold capitalize">
                {expense.name}
                </span>
                <span className="text-red-600 font-bold">
                -{formatCurrency(+expense.amount)}
                </span>
            </div>
            
            <div className="mt-2 text-sm text-gray-500 flex justify-between">
                <span>Created: {formatDate(expense.createdAt)}</span>
                <span>Last update: {formatDate(expense.updatedAt)}</span>
                <div className="flex gap-4 items-center">
                    <Link href={`/admin/budgets/${id}/expenses/${expense.id}/edit`} className="cursor-pointer rounded text-blue-500 hover:text-blue-400 hover:underline">Edit</Link>
                    <button onClick={() => handleDelete(String(id), expense.id)} className="cursor-pointer rounded text-red-500 hover:text-red-400 hover:underline">Delete</button>
                </div>
            </div>
        </li>
    )
}