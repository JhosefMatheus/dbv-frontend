import { AlertVariant } from "@/enums";

interface IBaseErrorProps {
  message: string;
  alertVariant: AlertVariant;
}

export default class BaseError extends Error {
  protected alertVariant: AlertVariant;

  constructor({ message, alertVariant }: IBaseErrorProps) {
    super(message);

    this.alertVariant = alertVariant;
    this.name = this.constructor.name;
  }

  public get AlertVariant(): AlertVariant {
    return this.alertVariant;
  }
}