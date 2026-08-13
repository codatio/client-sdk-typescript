/* tslint:disable */
/* eslint-disable */

import { CodatPlatformError } from "./codatplatformerror";

export class SDKError extends CodatPlatformError {
    constructor(message: string, httpMeta: { response: Response; request: Request; body: string }) {
        super(message, httpMeta);
        this.name = "SDKError";
    }
}
