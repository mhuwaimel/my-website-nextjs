import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full ">
      <div className="p-6 space-y-6 text-center bg-white rounded-lg shadow-xl bg-gradient-to-br from-white to-purple-100">
        <h1 className="text-6xl font-bold text-[#6936f5]">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 font-[tajawal]">
          الصفحة غير صحيحة
        </h2>
        <p className="max-w-md mx-auto text-gray-600 font-[tajawal]">
          عفواً ، الصفحة المطلوبة تم حذفها
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-[#6936f5] text-white
           rounded-md hover:bg-[#5a2dd3] transition-colors duration-200 font-[tajawal]"
        >
          <Home className="w-5 h-5 ml-4" />
          عـودة
        </Link>
      </div>
    </div>
  );
}
