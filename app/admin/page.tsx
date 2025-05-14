import Link from "next/link";
import type { Metadata } from "next";
import { getBudgets } from "../lib/budgets/budgetsFetching";
import type { BudgetAPIResponse } from "../lib/schemas/budget-schema";
import { formatCurrency, formatDate } from "../src/utils";

export const metadata: Metadata = {
    title: "Budgets control - Admin panel",
    description: "Made by Puly",
};

export default async function AdminPage() {

    const data = await getBudgets();

    return (
        <div className='p-6 space-y-8'>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <h1 className="font-black text-4xl text-cyan-700 my-5">My Budgets</h1>
                    <p className="text-xl font-bold">
                        Control your business or your own{" "}
                        <span className="text-lime-500">budgets</span>
                    </p>
                </div>
                <Link
                    href={'/admin/budgets/new'}
                    className='bg-cyan-700 hover:bg-cyan-600 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                >
                    Add New Budget
                </Link>
            </div>

            {data.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                    {data?.map((budget:BudgetAPIResponse) => (
                        <Link
                            href={`/admin/budgets/${budget.id}`}
                            key={budget.id}
                            className="bg-white shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
                        >
                            <h2 className="text-xl font-bold text-cyan-800 capitalize">{budget.name}</h2>
                            <p className="text-gray-600 mt-2">Amount: <span className="font-semibold text-lime-600">{formatCurrency(+budget.amount)}</span></p>
                            <p className="text-gray-600 mt-2">Last update: <span className="font-semibold text-lime-600">{formatDate(budget.updatedAt)}</span></p>
                        </Link>
                    ))}
                </div>
            ) : 
            <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-xl shadow-inner border border-gray-100">
                <p className="text-2xl font-semibold text-gray-600 mb-2">No budgets associated to this account</p>
                <p className="text-gray-500">Click the button above to create your first budget 🚀</p>
            </div>
            }
        </div>
      );
}