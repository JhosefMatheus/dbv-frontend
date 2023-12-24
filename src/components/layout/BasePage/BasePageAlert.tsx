import { Alert } from "@/components/ui/alert";
import { useAlertStore } from "@/stores";
import { X } from "lucide-react";

export default function BasePageAlert(): JSX.Element {
  const [alertVariant, alertMessage, setAlertOpen] = useAlertStore((state) => [state.variant, state.message, state.setIsOpen]);

  return (
    <Alert
      variant={alertVariant}
    >
      <div
        className="flex items-center justify-end"
      >
        <X
          className="w-8 h-8 cursor-pointer hover:bg-slate-200 rounded-full p-1"
          onClick={() => setAlertOpen(false)}
        />
      </div>
      <span
        className="text-gray-500"
      >
        {alertMessage}
      </span>
    </Alert>
  );
}