import BaseError, { IBaseErrorProps } from "./baseError";

interface IEmptyFieldErrorProps extends IBaseErrorProps {}

export default class EmptyFieldError extends BaseError {
  constructor({message, alertVariant}: IEmptyFieldErrorProps) {
    super({message, alertVariant});
    this.name = this.constructor.name;
  }
}