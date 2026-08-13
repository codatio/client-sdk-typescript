/* tslint:disable */
/* eslint-disable */

import { CodatLendingError } from "./codatlendingerror";

export class SDKError extends CodatLendingError {
    constructor(message: string, httpMeta: { response: Response; request: Request; body: string }) {
        super(message, httpMeta);
        this.name = "SDKError";
    }
}
