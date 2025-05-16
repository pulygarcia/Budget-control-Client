import { getBudgetById } from "@/app/lib/budgets/budgetsFetching";
import { notFound } from "next/navigation";
import EditBudgetForm from "@/app/src/components/budgets/EditBudgetForm";
import { Metadata } from "next";

export async function generateMetadata({params} : {params: {id:string}}) : Promise<Metadata>{
    //show name of budget to update
    const {id} = await params //await has no effect but avoids an Error
    const budget = await getBudgetById(id);

    return{
        title: `Budgets control - Edit ${budget.name}`,
        description: `Modify content of Budget: ${budget.name}`
    }
} 

export default async function EditBudget({params} : {params: {id:string}}) {
    /*const {id} = params;       <-- This way to get the params print an Error*/

    const {id} = await params; //this await avoid the warning above but has no effect¿

    try {
        const budget = await getBudgetById(id);
        
        return (
            <div>
                <h1 className="text-3xl font-black text-cyan-700 mb-5">Update Budget: <span className="text-gray-700 font-bold capitalize">{budget.name}</span></h1>
                <EditBudgetForm budget={budget} />
            </div>
        );

    } catch (error) {
        notFound()
    }
  }