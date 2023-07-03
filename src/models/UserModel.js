import { URL_API } from "../config";
import UnauthorizedException from "../exceptions/UnauthorizedExceptioin";
import ServerSideException from "../exceptions/ServerSideException";
import EmptyFieldException from "../exceptions/EmptyFieldException";
import InvalidPasswordException from "../exceptions/InvalidPasswordException";

export default class UserModel {
    #name;
    #login;
    #password;
    #confirmPassword;

    constructor({ name, login, password, confirmPassword }) {
        this.#name = name;
        this.#login = login;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
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

            const { message, token } = await response.json();

            switch(responseStatus) {
                case 200:
                    localStorage.setItem("token", token);

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

    async signUp() {
        try {
            if (!this.#name || !this.#login || !this.#password || !this.#confirmPassword) {
                throw new EmptyFieldException("Algum dos campos não foi preenchido.", "warning");
            }

            if (this.#password !== this.#confirmPassword) {
                throw new InvalidPasswordException("As senhas não coincidem.", "warning");
            }

            const requestBody = {
                name: this.#name,
                login: this.#login,
                password: this.#password
            }

            const response = await fetch(`${URL_API}/auth/signUp`, {
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