import { Separator } from "@/components/ui/separator";
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
        "w-full h-1/6 overflow-hidden p-2 flex items-center justify-start",
        className
      )}
    >
      {
        Children.map(children, (child: React.ReactNode, index: number) => (
          index !== Children.count(children) - 1 ? (
            <>
              {child}
              <Separator
                orientation="vertical"
                className="mx-2 bg-gray-500 h-5"
              />
            </>
          ): (
            child
          )
        ))
      }
    </div>
  );
}