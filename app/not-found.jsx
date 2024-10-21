import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-purple-100">
      <div className="p-8 space-y-6 text-center bg-white rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold text-[#6936f5]">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="max-w-md mx-auto text-gray-600">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-[#6936f5] text-white rounded-md hover:bg-[#5a2dd3] transition-colors duration-200"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
