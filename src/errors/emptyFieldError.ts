import { AlertVariant } from "@/enums";
import BaseError from "./baseError";

interface IEmptyFieldErrorProps {
  message: string;
  alertVariant: AlertVariant;
}

export default class EmptyFieldError extends BaseError {
  constructor({message, alertVariant}: IEmptyFieldErrorProps) {
    super({message, alertVariant});
    this.name = this.constructor.name;
  }
}