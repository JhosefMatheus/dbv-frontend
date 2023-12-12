import { cn } from "@/lib/utils";
import Loader from "./Loader";
import { ReactNode } from "react";

interface ILoaderPageProps {
  children?: ReactNode;
  className?: string;
}

export default function LoaderPage({ children, className }: ILoaderPageProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-full w-full",
        className
      )}
    >
      <Loader />
      {children}
    </div>
  );
}