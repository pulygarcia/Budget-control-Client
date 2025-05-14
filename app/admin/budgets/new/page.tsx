import NewBudgetForm from "@/app/src/components/budgets/NewBudgetForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets control - New Budget",
  description: "Made by Puly",
};


export default async function NewBudget() {    
    return (
        <div>
          <h1 className="text-3xl font-black text-cyan-700 mb-5">Create New Budget</h1>
    
          <NewBudgetForm />
        </div>
    )
    
}