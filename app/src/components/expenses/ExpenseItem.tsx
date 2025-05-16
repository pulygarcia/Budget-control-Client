import { ExpenseAPIResponse } from "@/app/lib/schemas/budget-schema";
import { formatCurrency, formatDate } from "../../utils";

export default function ExpenseItem({expense} : {expense: ExpenseAPIResponse}){
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
            </div>
        </li>
    )
}