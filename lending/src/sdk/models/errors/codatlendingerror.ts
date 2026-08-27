/* tslint:disable */
/* eslint-disable */

export class CodatLendingError extends Error {
    readonly body: string;
    readonly statusCode: number;
    readonly contentType: string;
    readonly headers: Headers;
    readonly rawResponse: Response;

    constructor(message: string, httpMeta: { response: Response; request: Request; body: string }) {
        super(message);
        this.name = "CodatLendingError";
        this.body = httpMeta.body;
        this.statusCode = httpMeta.response.status;
        this.contentType = httpMeta.response.headers.get("content-type") ?? "";
        this.headers = httpMeta.response.headers;
        this.rawResponse = httpMeta.response;
    }
}
