export class EmptyFieldException extends Error {
    constructor(message, severity) {
        super(message);
        this.name = this.constructor.name;
        this.severity = severity;
    }
}