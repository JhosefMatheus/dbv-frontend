import { cn } from "@/lib/utils";
import { FunctionalityModel } from "@/models";
import { FunctionalityModelProps } from "@/models/functionality-model";
import { IGetFunctionalitiesResponse } from "@/responses";
import { FunctionalityService } from "@/services";
import { useEffect, useState } from "react";

export default function SideBar(): JSX.Element {
  const [functionalities, setFunctionalities] = useState<FunctionalityModel[]>([]);

  useEffect(() => {
    async function init(): Promise<void> {
      try {
        const getFunctionalitiesResponse: IGetFunctionalitiesResponse = await new FunctionalityService().findMany<IGetFunctionalitiesResponse>();

        setFunctionalities(getFunctionalitiesResponse
          .functionalities.map((functionalityProps: FunctionalityModelProps) => new FunctionalityModel(functionalityProps)));

      } catch (error: any) {
        console.log(error);
      }
    }

    init();
  }, []);

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
      {functionalities.map((functionality: FunctionalityModel) => (
          <span
            key={`functionality-${functionality.getId()}`}
            className="block mt-4 text-gray-500"
          >
            {functionality.getName()}
          </span>
        ))}
    </div>
  );
}