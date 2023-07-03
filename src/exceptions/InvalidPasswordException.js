export default class InvalidPasswordException extends Error {
    constructor(message, severityAlert) {
        super(message);
        this.name = this.constructor.name;
        this.severityAlert = severityAlert;
    }
}