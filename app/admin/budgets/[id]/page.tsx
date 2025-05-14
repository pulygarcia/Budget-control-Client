export default function BudgetDetailPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-cyan-700">Marketing Budget Q2</h1>
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
          <span className="text-lime-600 font-bold">$5,000.00</span>
        </p>
        <p>
          <span className="font-semibold text-gray-500">Created at:</span>{" "}
          April 1, 2025
        </p>
        <p>
          <span className="font-semibold text-gray-500">Last updated:</span>{" "}
          May 10, 2025
        </p>
      </div>

      <div className="flex gap-4 pt-4 flex-wrap">
      <button className="flex items-center gap-2 border border-blue-400 text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Expense
      </button>

      <button className="flex items-center gap-2 border border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-medium py-2 px-4 rounded-md transition cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
        </svg>
        Edit Budget
      </button>

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
