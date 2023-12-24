import { cn } from "@/lib/utils";
import { Children } from "react";

interface IBasePageBreadcrumbsProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasePageBraedcrumbs({ children, className }: IBasePageBreadcrumbsProps): JSX.Element {
  return (
    <div
      className={cn(
        "w-full h-1/6 overflow-hidden p-2",
        className
      )}
    >
      {
        Children.map(children, (child: React.ReactNode, index: number) => (
          <div></div>
        ))
      }
    </div>
  );
}