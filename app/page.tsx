export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-lime-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-cyan-700">
          Budget Manager
        </h1>
        <p className="text-gray-700 text-base">
          Take control of your financial life with Budget Manager — your all-in-one solution to track income, manage expenses, and optimize your monthly budget.
        </p>

        <ul className="space-y-4 text-base">
          {[
            "Easy-to-use interface designed for quick expense logging",
            "Secure and private — your data is stored safely",
            "Built-in authentication system for account protection",
            "Access from any device, anywhere, anytime",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-start bg-gray-50 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-lime-600 font-bold text-xl mr-3">✔</span>
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 text-sm">
          Whether you're saving for a goal or simply want to understand where your money goes, Budget Manager helps you stay in control with confidence.
        </p>

        <a
          href="/admin"
          className="inline-block w-full bg-lime-500 hover:bg-lime-600 text-white text-lg font-medium py-3 rounded-xl transition"
        >
          Start Managing
        </a>
      </div>
    </main>
  );
}
