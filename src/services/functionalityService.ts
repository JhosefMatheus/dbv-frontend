import { IBaseResponse } from "@/responses";
import BaseService from "./baseService";
import UnauthorizedError from "@/errors/unauthorizedError";
import { AlertVariant } from "@/enums";
import { API_URL } from "@/config";
import handleApiResponse from "@/funcs/api";
import { CustomError } from "@/errors";

export default class FunctionalityService extends BaseService {
  public override async findMany<T extends IBaseResponse>(): Promise<T> {
    try {
      const token: string | null = localStorage.getItem("token");

      if (token === null) {
        throw new UnauthorizedError({
          message: "Token não encontrado.", alertVariant: AlertVariant.WARNING
        });
      }

      const response: Response = await fetch(`${API_URL}/functionality`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })

      const getFunctionalitiesResponse: T = await handleApiResponse<T>(response);

      return getFunctionalitiesResponse;
    } catch (error: any) {
      if (error.constructor === Error) {
        throw new CustomError({
          message: `Erro ao buscar funcionalidades: ${error.message}`,
          alertVariant: AlertVariant.DANGER
        });
      }

      throw error;
    }
  }
}