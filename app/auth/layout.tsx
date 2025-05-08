import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css"

export const metadata: Metadata = {
  title: "Budgets control - Authentication",
  description: "Made by Puly",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Presentation */}
      <section className="bg-cyan-700 text-white flex flex-col justify-center items-center p-10 relative">
        <div className="max-w-md text-center space-y-6 z-10">
          <h1 className="text-4xl font-bold text-lime-400">Budget Control</h1>
          <p className="text-xl">
            Create your account, add budgets, and manage your expenses to keep everything under control.
          </p>
        </div>

        {/* Decorative SVG */}
        <svg
          className="absolute bottom-4 right-4 w-20 h-20 text-lime-300 opacity-40"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 7h-1V5a1 1 0 00-1-1H5a3 3 0 00-3 3v10a3 3 0 003 3h14a1 1 0 001-1v-2h1a1 1 0 001-1V8a1 1 0 00-1-1zM5 5h14v2H5a1 1 0 010-2zm15 10h-1v-2h1v2zM5 17a1 1 0 01-1-1V8a3 3 0 003 3h9a1 1 0 010 2H7a1 1 0 100 2h7a3 3 0 003-3h2v5H5z" />
        </svg>
      </section>

      {/* Right: Children content (Login/Register forms) */}
      <section className="flex justify-center items-center px-6 py-10 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}