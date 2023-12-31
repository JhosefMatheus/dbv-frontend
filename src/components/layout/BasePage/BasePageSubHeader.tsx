import { cn } from "@/lib/utils";

interface IBasePageSubHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasePageSubHeader({ children, className }: IBasePageSubHeaderProps): JSX.Element {
  return (
    <div
      className={cn(
        "w-full h-1/6 overflow-hidden p-2",
        className
      )}
    >
      {children}
    </div>
  );
}