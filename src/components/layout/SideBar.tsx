import { cn } from "@/lib/utils";

export default function SideBar(): JSX.Element {
  return (
    <div
      className={cn(
        "h-full p-2 bg-white border-r-slate-500 shadow",
        "xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/4"
      )}
    >
      <h4
        className="text-xl font-bold"
      >
        Desbravadores
      </h4>
      <span
        className="text-gray-500"
      >
        Sistema de gerência de desbravadores
      </span>
    </div>
  );
}