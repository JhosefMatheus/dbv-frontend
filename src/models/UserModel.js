import { URL_API } from "../config";
import UnauthorizedException from "../exceptions/UnauthorizedExceptioin";
import ServerSideException from "../exceptions/ServerSideException";
import EmptyFieldException from "../exceptions/EmptyFieldException";

export default class UserModel {
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
                throw new EmptyFieldException("Algum dos campos não foi preenchido.", "warning");
            }
            
            const requestBody = {
                login: this.#login,
                password: this.#password
            }
    
            const response = await fetch(`${URL_API}/auth/signIn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const responseStatus = response.status;

            const { message } = await response.json();

            switch(responseStatus) {
                case 200:
                    return {
                        message
                    }

                case 401:
                    throw new UnauthorizedException(message, "warning");

                case 500:
                    throw new ServerSideException(message, "error");

                default:
                    throw new Error(message);
            }
        } catch(error) {
            throw error;
        }
    }
}