import { FunctionalityModelProps } from "@/models/functionality-model";
import { IBaseResponse } from "..";

export interface IGetFunctionalitiesResponse extends IBaseResponse {
  functionalities: FunctionalityModelProps[];
}