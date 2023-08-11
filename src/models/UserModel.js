import {
    EmptyFieldException,
    ServerSideException,
    UnauthorizedException
} from "../exceptions";

import { DEV_URL_API } from "../config";

export class UserModel {
    #login;
    #password;

    constructor({ login, password }) {
        this.#login = login;
        this.#password = password;
    }

    get login() {
        return this.#login;
    }

    async signIn() {
        try {
            if (!this.#login || !this.#password) {
                throw new EmptyFieldException("Login e senha são obrigatórios", "warning");
            }

            const requestBody = {
                login: this.#login,
                password: this.#password
            }

            const response = await fetch(`${DEV_URL_API}/auth/signIn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const responseStatus = response.status;

            const responseBody = await response.json();

            const responseMessage = responseBody.message;

            switch (responseStatus) {
                case 200:
                    const token = responseBody.token;

                    localStorage.setItem("token", token);

                    return {
                        message: responseMessage,
                        severity: "success"
                    }

                case 401:
                    throw new UnauthorizedException(responseMessage, "warning");

                case 500:
                    throw new ServerSideException(responseMessage, "error");

                default:
                    throw new Error("Erro desconhecido");
            }

        } catch (error) {
            throw error;
        }
    }
}