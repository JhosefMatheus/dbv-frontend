import { Alert } from "@/components/ui/alert";
import { AlertVariant } from "@/enums";
import { X } from "lucide-react";

export default function BasePageAlert(): JSX.Element {
  return (
    <Alert
      variant={AlertVariant.DEFAULT}
    >
      <div
        className="flex items-center justify-end"
      >
        <X
          className="w-8 h-8 cursor-pointer hover:bg-slate-200 rounded-full p-1"
        />
      </div>
      <span
        className="text-gray-500"
      >
        Erro inesperado ao fazer login.
      </span>
    </Alert>
  );
}