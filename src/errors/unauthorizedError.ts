import BaseError, { IBaseErrorProps } from "./baseError";

interface IUnauthorizedErrorProps extends IBaseErrorProps {}

export default class UnauthorizedError extends BaseError {
  constructor({message, alertVariant}: IUnauthorizedErrorProps) {
    super({message, alertVariant});
    this.name = this.constructor.name;
  }
}