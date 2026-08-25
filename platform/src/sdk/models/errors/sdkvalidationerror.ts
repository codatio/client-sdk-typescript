/* tslint:disable */
/* eslint-disable */

export class SDKValidationError extends Error {
    readonly cause: unknown;
    readonly rawValue: unknown;
    readonly rawMessage: unknown;

    constructor(message: string, cause: unknown, rawValue: unknown) {
        super(message);
        this.name = "SDKValidationError";
        this.cause = cause;
        this.rawValue = rawValue;
        this.rawMessage = message;
    }

    pretty(): string {
        return this.message;
    }
}

export function formatZodError(err: unknown, level?: number): string {
    void err;
    void level;
    return "";
}
