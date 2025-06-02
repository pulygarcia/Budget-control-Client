import Budget from "@/app/src/components/budgets/Budget";
import { getBudgetById } from "@/app/lib/budgets/budgetsFetching";

type PageProps = {
  params: { id: string };
};

export default async function BudgetDetailPage({ params }: PageProps) {
  const {id} = await  params
  const budget = await getBudgetById(id);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Budget budget={budget} />
    </div>
  );
}
