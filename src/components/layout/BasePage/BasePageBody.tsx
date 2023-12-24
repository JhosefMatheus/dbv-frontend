import { cn } from "@/lib/utils";

interface IBasePageBodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasePageBody({ children, className }: IBasePageBodyProps): JSX.Element {
  return (
    <div
      className={cn(
        "w-full h-5/6 overflow-hidden p-2",
        className
      )}
    >
      {children}
    </div>
  );
}