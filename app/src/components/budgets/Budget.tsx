'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeleteBudgetModal from "./DeleteBudgetModal";
import ExpenseItem from "../expenses/ExpenseItem";
import { formatCurrency, formatDate } from "@/app/src/utils";
import { deleteBudget } from "@/app/lib/budgets/budgetsFetching";
import { toast } from "react-toastify";
import { BudgetAPIResponse } from "@/app/lib/schemas/budget-schema";

type BudgetProps = {
  budget: BudgetAPIResponse;
};

export default function Budget({ budget }: BudgetProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState(budget.expenses || []);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await deleteBudget(budget.id.toString());
      toast.success(res.msg);
      router.push("/admin");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black text-cyan-700 capitalize">{budget.name}</h1>
          <Link href={'/admin'} className="text-cyan-700 hover:underline text-sm font-medium">
            ← Back
          </Link>
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

          {expenses && expenses.length > 0 ? (
            <div className="mt-6 border-t pt-4">
              <h2 className="text-xl font-bold text-cyan-700 mb-2">Expenses</h2>
              <ul className="space-y-2">
                {expenses.map((expense, index) => (
                  <ExpenseItem key={index} expense={expense} onDelete={(id) => {
                    setExpenses(prev => prev.filter(exp => exp.id !== id));
                  }} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-6 border-t pt-4">
              <p>No related expenses to this budget yet</p>
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 pt-4 flex-wrap">
          <Link href={`/admin/budgets/${budget.id}/expenses/new`} className="flex items-center gap-2 border border-blue-400 text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Expense
          </Link>

          <Link href={`/admin/budgets/${budget.id}/edit`} className="flex items-center gap-2 border border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
            </svg>
            Edit Budget
          </Link>

          <button disabled={loading} onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 border border-red-400 text-red-700 hover:bg-red-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Delete Budget
          </button>
        </div>
      </div>

      <DeleteBudgetModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleDelete} 
      />
    </>
  );
}
