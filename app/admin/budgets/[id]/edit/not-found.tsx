export default function NotFound() {
  return (
    <div className="py-10 bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-extrabold text-cyan-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or you don’t have access.
        </p>
        <a
          href="/admin"
          className="inline-block bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-600 transition"
        >
          Back to Admin Panel
        </a>
      </div>
    </div>
  );
}
