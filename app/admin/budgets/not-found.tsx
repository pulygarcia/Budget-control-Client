// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-yellow-100 text-yellow-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/admin"
        className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800 transition"
      >
        Go back to Admin Panel
      </Link>
    </div>
  );
}
