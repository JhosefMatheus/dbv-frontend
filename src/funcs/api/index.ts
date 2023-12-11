import { AlertVariant } from "@/enums";
import { CustomError } from "@/errors";
import { IBaseResponse } from "@/responses";

export default async function handleApiResponse<T extends IBaseResponse>(response: Response): Promise<T> {
  const responseBody: T = await response.json();
  const responseStatus: number = response.status;

  switch (responseStatus) {
    case 200:
      return responseBody;
    case 400:
      throw new CustomError({ ...responseBody });
    case 401:
      throw new CustomError({ ...responseBody });
    case 404:
      throw new CustomError({ ...responseBody });
    case 500:
      throw new CustomError({ ...responseBody });
    default:
      throw new CustomError({
        message: `Erro inesperado ao relizar o login: ${responseBody.message}`,
        alertVariant: AlertVariant.DANGER
      });
  }
}
