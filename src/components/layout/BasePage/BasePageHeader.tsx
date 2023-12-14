import { cn } from "@/lib/utils";

interface IBasePageHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasePageHeader({ children, className }: IBasePageHeaderProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col p-2 bg-white border-b-slate-500 shadow rounded",
        className
      )}
    >
      {children}
    </div>
  );
}