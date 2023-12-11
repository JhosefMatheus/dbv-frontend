import { API_URL } from "@/config";
import { AlertVariant } from "@/enums";
import { CustomError, EmptyFieldError } from "@/errors";
import handleApiResponse from "@/funcs/api";
import { ISignInRequestBody } from "@/requestBodies";
import { ISignInResponse } from "@/responses";

export default class AuthService {
  public static async signIn(email: string, password: string): Promise<ISignInResponse> {
    try {
      if (email === '' || password === '') {
        throw new EmptyFieldError({
          message: "Preencha todos os campos obrigatórios.",
          alertVariant: AlertVariant.WARNING
        });
      }

      const requestBody: ISignInRequestBody = { email, password };

      const response: Response = await fetch(`${API_URL}/auth/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const signInResponse: ISignInResponse = await handleApiResponse<ISignInResponse>(response);

      return signInResponse;
    } catch (error: any) {
      if (error.constructor === Error) {
        throw new CustomError({
          message: `Erro inesperado ao relizar o login: ${error.message}`,
          alertVariant: AlertVariant.DANGER
        });
      }

      throw error;
    }
  }
}