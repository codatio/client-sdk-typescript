/* tslint:disable */
/* eslint-disable */

import { CodatBankFeedsError } from "./codatbankfeedserror";
import type { ErrorMessageData } from "../ErrorMessage";
import type { ErrorValidation } from "../shared/errorvalidation";

export type { ErrorMessageData };

export class ErrorMessage extends CodatBankFeedsError {
    service?: string | undefined;
    error?: string | undefined;
    correlationId?: string | undefined;
    validation?: ErrorValidation | null | undefined;
    canBeRetried?: string | undefined;
    detailedErrorCode?: number | undefined;

    data$: ErrorMessageData;

    constructor(
        err: ErrorMessageData,
        httpMeta: { response: Response; request: Request; body: string },
    ) {
        const data = err as ErrorMessageData & { message?: unknown };
        const message = typeof data.message === "string"
            ? data.message
            : `API error occurred: ${JSON.stringify(err)}`;
        super(message, httpMeta);
        this.data$ = err;
        if (err.service != null) this.service = err.service;
        if (err.error != null) this.error = err.error;
        if (err.correlationId != null) this.correlationId = err.correlationId;
        if (err.validation != null) this.validation = err.validation;
        if (err.canBeRetried != null) this.canBeRetried = err.canBeRetried;
        if (err.detailedErrorCode != null) this.detailedErrorCode = err.detailedErrorCode;
        this.name = "ErrorMessage";
    }
}
