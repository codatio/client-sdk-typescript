/* tslint:disable */
/* eslint-disable */

import { CodatBankFeedsError } from "./codatbankfeedserror";

export class SDKError extends CodatBankFeedsError {
    constructor(message: string, httpMeta: { response: Response; request: Request; body: string }) {
        super(message, httpMeta);
        this.name = "SDKError";
    }
}
