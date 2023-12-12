import { AlertVariant } from "@/enums";
import { CustomError } from "@/errors";
import { IBaseResponse } from "@/responses";
import { ResponseStatusAlertVariantConfig } from "@/types";

function handleResponseStatusAlertVariantConfig(
  status: number,
  defaultAlertVariant: AlertVariant,
  responseStatusAlertVariantConfig?: ResponseStatusAlertVariantConfig[]
): AlertVariant {
  if (!responseStatusAlertVariantConfig) {
    return defaultAlertVariant;
  }

  const statusConfig: ResponseStatusAlertVariantConfig | undefined = responseStatusAlertVariantConfig.find(e => e.status === status);

  if (statusConfig) {
    return statusConfig.alertVariant;
  }

  return defaultAlertVariant;
}

export default async function handleApiResponse<T extends IBaseResponse>(
  response: Response,
  responseStatusAlertVariantConfig?: ResponseStatusAlertVariantConfig[]
): Promise<T> {
  const responseBody: T = await response.json();
  const responseStatus: number = response.status;

  switch (responseStatus) {
    case 200:
      return responseBody;
    case 400:
      throw new CustomError({
        ...responseBody,
        alertVariant: handleResponseStatusAlertVariantConfig(400, AlertVariant.DANGER, responseStatusAlertVariantConfig)
      });
    case 401:
      throw new CustomError({
        ...responseBody,
        alertVariant: handleResponseStatusAlertVariantConfig(401, AlertVariant.WARNING, responseStatusAlertVariantConfig)
      });
    case 404:
      throw new CustomError({
        ...responseBody,
        alertVariant: handleResponseStatusAlertVariantConfig(404, AlertVariant.WARNING, responseStatusAlertVariantConfig)
      });
    case 500:
      throw new CustomError({
        ...responseBody,
        alertVariant: handleResponseStatusAlertVariantConfig(500, AlertVariant.DANGER, responseStatusAlertVariantConfig)
      });
    default:
      throw new CustomError({
        message: `Erro inesperado ao relizar o login: ${responseBody.message}`,
        alertVariant: AlertVariant.DANGER
      });
  }
}
