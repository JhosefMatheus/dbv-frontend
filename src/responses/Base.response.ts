import { SeverityWarningEnum } from "../enums";

export interface BaseResponse {
    message: string;
    severityWarning: SeverityWarningEnum;
}