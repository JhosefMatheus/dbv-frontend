import { API_URL } from "@/config";
import { AlertVariant } from "@/enums";
import { CustomError } from "@/errors";
import UnauthorizedError from "@/errors/unauthorizedError";
import handleApiResponse from "@/funcs/api";
import { ITokenVerifyResponse } from "@/responses";

export default class TokenService {
  public static async tokenVerify(): Promise<ITokenVerifyResponse> {
    try {
      const token: string | null = localStorage.getItem("token");

      if (token === null) {
        throw new UnauthorizedError({
          message: "Token não encontrado.",
          alertVariant: AlertVariant.DANGER
        });
      }

      const response: Response = await fetch(`${API_URL}/token/verify`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const responeBody: ITokenVerifyResponse = await handleApiResponse<ITokenVerifyResponse>(response);

      return responeBody;
    } catch (error: any) {
      if (error.constructor === Error) {
        throw new CustomError({
          message: error.message,
          alertVariant: AlertVariant.DANGER
        });
      }

      throw error;
    }
  }
}