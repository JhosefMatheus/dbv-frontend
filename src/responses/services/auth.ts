import { UserModelProps } from "@/models";
import { IBaseResponse } from "..";

export interface ISignInResponse extends IBaseResponse {
  token: string;
  user: UserModelProps;
}