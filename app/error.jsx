"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#6936f5] text-white p-4">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-6xl font-bold animate-bounce">Oops!</h1>
        <p className="text-3xl font-[mada]">عفواً،هناك خطأ</p>
        <p className="text-sm opacity-80">الخطأ: {error.message}</p>
        <div className="justify-around flex-1 space-x-6">
          <Button
            onClick={reset}
            variant="outline"
            className="bg-white text-[#6936f5] hover:bg-gray-100 hover:text-[#6936f5]"
          >
            إعادة المحاولة
          </Button>
          <Button
            asChild
            variant="primary"
            className="bg-white text-[#6936f5] hover:bg-gray-100 hover:text-[#6936f5]"
          >
            <Link href="/" className="font-[changa]">
              الرئـيسية
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
