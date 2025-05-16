'use client'

import { getBudgetById } from "@/app/lib/budgets/budgetsFetching";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatDate, formatCurrency } from "@/app/src/utils";
import { BudgetAPIResponse } from "@/app/lib/schemas/budget-schema";


export default function BudgetDetailPage() {
  const id = useParams().id;
  const [budget, setBudget] = useState<BudgetAPIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBudgetById(id);
        
        setBudget(data);

      } catch (error:any) {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    }    

    fetchData();

  },[id])

  if (loading){
    return (
      <div className="flex items-center justify-center">
        <div
          className="w-10 h-10 border-4 border-t-cyan-600 border-gray-300 rounded-full animate-spin"
        ></div>
      </div>
    );
  }

  if (!budget){
    return (
      <div className="p-6 bg-yellow-100 text-yellow-800 rounded-md max-w-md mx-auto mt-10 shadow text-center space-y-4">
        <p>No budget found</p>
        <Link
          href={"/admin"}
          className="inline-block text-cyan-700 hover:text-cyan-900 font-semibold underline"
        >
          Back to admin panel
        </Link>
      </div>
    );
  }

  if (error)
    return (
      <div className="p-6 bg-red-100 text-red-800 rounded-md max-w-md mx-auto mt-10 shadow text-center space-y-4">
        <p className="font-semibold">Error: {error}</p>
        <a
          href="/admin"
          className="inline-block text-cyan-700 hover:text-cyan-900 font-semibold underline"
        >
          Back to admin panel
        </a>
      </div>
    );
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-cyan-700 capitalize">{budget.name}</h1>
        <a
          href="/admin/budgets"
          className="text-cyan-700 hover:underline text-sm font-medium"
        >
          ← Back
        </a>
      </div>

      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          <span className="font-semibold text-gray-500">Amount:</span>{" "}
          <span className="text-lime-600 font-bold">{formatCurrency(+budget.amount)}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-500">Created at:</span>{" "}
          {formatDate(budget.createdAt)}
        </p>
        <p>
          <span className="font-semibold text-gray-500">Last update:</span>{" "}
          {formatDate(budget.updatedAt)}
        </p>

        {budget.expenses && budget.expenses.length > 0 ? (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-bold text-cyan-700 mb-2">Expenses</h2>
            <ul className="space-y-2">
              {budget.expenses.map((expense, index) => (
                <li
                  key={index}
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : 
          <div className="mt-6 border-t pt-4">
            <p>No related expenses to this budget yet</p>
          </div>
        }
      </div>

      <div className="flex gap-4 pt-4 flex-wrap">
        <button className="flex items-center gap-2 border border-blue-400 text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Expense
        </button>

        <Link href={`/admin/budgets/${budget.id}/edit`} className="flex items-center gap-2 border border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
          </svg>
          Edit Budget
        </Link>

        <button className="flex items-center gap-2 border border-red-400 text-red-700 hover:bg-red-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Delete Budget
        </button>
      </div>
    </div>
  );
}
