/* tslint:disable */
/* eslint-disable */

import { CodatSyncExpensesError } from "./codatsyncexpenseserror";

export class SDKError extends CodatSyncExpensesError {
    constructor(message: string, httpMeta: { response: Response; request: Request; body: string }) {
        super(message, httpMeta);
        this.name = "SDKError";
    }
}
