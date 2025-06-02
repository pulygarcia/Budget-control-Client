import { getExpenseById } from "@/app/lib/expenses/expensesFetching";
import EditExpenseForm from "@/app/src/components/expenses/EditExpenseForm";
import { Metadata } from "next";

export async function generateMetadata({params} : {params: {id:string, expenseId:string}}) : Promise<Metadata>{
    //show name of expense to update
    const {id:budgetId , expenseId} = await params //await has no effect but avoids an Error
    const expense = await getExpenseById(budgetId ,expenseId);

    return{
        title: `Budgets control - Edit expense [${expense.name}]`,
        description: `Modify content of Expense: [${expense.name}]`
    }
} 

export default async function EditExpense({params} : {params: {id:string, expenseId:string}}){
    const {id:budgetId , expenseId} = await params //await has no effect but avoids an Error
    const expense = await getExpenseById(budgetId ,expenseId);



    return(
        <section className="max-w-3xl mx-auto mt-12 px-6">
      <div className="flex items-center gap-3 mb-6">
        {/* EDITION SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-cyan-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536M9 13l6-6m2-2a2.828 2.828 0 114 4L9 21H5v-4L17.232 5.232z"
          />
        </svg>
        <h1 className="text-3xl font-black text-cyan-700">
          Update Expense: <span className="text-gray-700 font-bold capitalize">{expense.name}</span>
        </h1>
      </div>

        <EditExpenseForm expense={expense} />
    </section>
    )
}