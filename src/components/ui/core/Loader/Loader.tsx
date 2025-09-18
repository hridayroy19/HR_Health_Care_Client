import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <Loader variant="dual-ring" />
        <span className="text-black dark:text-white">please wait</span>
      </div>
    </div>
  );
}
