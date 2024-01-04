import { IBaseResponse } from "@/responses";

export default abstract class BaseService {
  abstract findMany<T extends IBaseResponse>(): Promise<T>;
}