"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePreferences } from "@/components/providers/PreferencesProvider";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  const { t } = usePreferences();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#6936f5] text-white p-4">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-4xl font-bold animate-bounce">{t.errors.title}</h1>
        <div className="justify-around flex-1 space-x-6">
          <Button
            onClick={reset}
            variant="outline"
            className="bg-white text-[#6936f5] hover:bg-gray-100 hover:text-[#6936f5]"
          >
            {t.errors.retry}
          </Button>
          <Button
            asChild
            variant="default"
            className="bg-white text-[#6936f5] hover:bg-gray-100 hover:text-[#6936f5]"
          >
            <Link href="/" className="font-[changa]">
              {t.errors.home}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
