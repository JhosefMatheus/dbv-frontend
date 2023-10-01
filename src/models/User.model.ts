import { URL_API } from "../config";
import { SeverityWarningEnum } from "../enums";
import { CustomException, EmptyFieldException, ServerSideException, UnauthorizedException } from "../exceptions";
import { UserModelProps } from "../props";
import { SignInResponse } from "../responses";

export class UserModel {
    private login?: string;
    private password?: string;

    constructor(props: UserModelProps) {
        this.login = props.login;
        this.password = props.password;
    }

    get Login(): string | undefined {
        return this.login;
    }

    async signIn(): Promise<SignInResponse> {
        try {
            if (!this.login || !this.password) {
                throw new EmptyFieldException("Preencha todos os campos obrigatórios do formulário.", SeverityWarningEnum.WARNING);
            }

            const requestBody: object = {
                login: this.login,
                password: this.password
            }

            const response: Response = await fetch(`${URL_API}/auth/signIn`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const responseStatus: number = response.status;
            const responseBody: SignInResponse = await response.json();

            switch (responseStatus) {
                case 200:
                    return responseBody;

                case 401:
                    throw new UnauthorizedException(responseBody.message, responseBody.severityWarning);

                case 500:
                    throw new ServerSideException(responseBody.message, responseBody.severityWarning);

                default:
                    throw new CustomException(`Erro inesperado: ${responseBody.message}`, responseBody.severityWarning);
                }
            } catch (error: any) {
                if (error.constructor === Error) {
                throw new CustomException(`Erro inesperado: ${error.message}`, SeverityWarningEnum.ERROR);
            }

            throw error;
        }
    }
}