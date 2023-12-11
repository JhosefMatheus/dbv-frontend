import { AlertVariant } from "@/enums";

export interface IBaseResponse {
  message: string;
  alertVariant: AlertVariant;
}