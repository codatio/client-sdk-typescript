/* tslint:disable */
/* eslint-disable */

import { CodatBankFeedsError } from "./codatbankfeedserror";

export class ResponseValidationError extends CodatBankFeedsError {
    readonly cause: unknown;
    readonly rawMessage: unknown;
    readonly rawValue: unknown;

    constructor(
        message: string,
        extra: { response: Response; request: Request; body: string; cause: unknown; rawValue: unknown; rawMessage: unknown },
    ) {
        super(message, extra);
        this.name = "ResponseValidationError";
        this.cause = extra.cause;
        this.rawMessage = extra.rawMessage;
        this.rawValue = extra.rawValue;
    }

    pretty(): string {
        return this.message;
    }
}
