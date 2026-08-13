/* tslint:disable */
/* eslint-disable */

import { CodatSyncPayablesError } from "./codatsyncpayableserror";

export class SDKError extends CodatSyncPayablesError {
    constructor(message: string, httpMeta: { response: Response; request: Request; body: string }) {
        super(message, httpMeta);
        this.name = "SDKError";
    }
}
