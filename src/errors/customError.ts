import BaseError, { IBaseErrorProps } from "./baseError";

interface ICustomErrorProps extends IBaseErrorProps {}

export default class CustomError extends BaseError {
  constructor({ message, alertVariant }: ICustomErrorProps) {
    super({message, alertVariant});
    this.name = this.constructor.name;
  }
}