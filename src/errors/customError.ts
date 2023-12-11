import { AlertVariant } from "@/enums";
import BaseError from "./baseError";

interface ICustomErrorProps {
  message: string;
  alertVariant: AlertVariant;
}

export default class CustomError extends BaseError {
  constructor({ message, alertVariant }: ICustomErrorProps) {
    super({message, alertVariant});
    this.name = this.constructor.name;
  }
}