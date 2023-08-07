import { EmptyFieldException, UnauthorizedException } from "../exceptions";

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

            if (this.#login !== "admin" || this.#password !== "admin") {
                throw new UnauthorizedException("Login ou senha inválidos", "warning");
            }

            return {
                message: "Login efetuado com sucesso",
                severity: "success"
            }
        } catch (error) {
            throw error;
        }
    }
}