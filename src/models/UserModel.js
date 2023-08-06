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
        if (!this.#login || !this.#password) {
            console.log("Login or password is empty")
        }
    }
}