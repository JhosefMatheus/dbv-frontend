import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ILoaderProps {
  className?: string;
}

export default function Loader({ className }: ILoaderProps): JSX.Element {
  return (
    <Loader2
      className={cn(
        "animate-spin text-2xl text-blue-500",
        className
      )}
    />
  );
}