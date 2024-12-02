import { Loader2 } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Loader2 className="w-12 h-12 animate-spin text-[#6936f5]" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
