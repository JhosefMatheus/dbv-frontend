import { CircleUserRound, Menu } from "lucide-react";

export default function MainBar(): JSX.Element {
  return (
    <div
      className="w-full flex items-center justify-between p-2 bg-white border-b-slate-500 shadow"
    >
      <Menu
        className="w-8 h-8 cursor-pointer hover:bg-slate-200 rounded-full p-1"
      />
      <CircleUserRound
        className="w-8 h-8 cursor-pointer hover:bg-slate-200 rounded-full p-1"
      />
    </div>
  );
}