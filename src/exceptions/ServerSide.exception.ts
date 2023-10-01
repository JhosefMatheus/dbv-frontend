import { SeverityWarningEnum } from "../enums";

export class ServerSideException extends Error {
    private severityWarning: SeverityWarningEnum;

    constructor(message: string, severityWarning: SeverityWarningEnum) {
        super();

        this.message = message;
        this.severityWarning = severityWarning;
        this.name = this.constructor.name;
    }

    get SeverityWarning(): SeverityWarningEnum {
        return this.severityWarning;
    }
}