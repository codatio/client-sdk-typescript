/* tslint:disable */
/* eslint-disable */

export interface GenerateCredentialsRequest {
    companyId: string;
    connectionId: string;
    requestBody?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
}

export interface CredentialsGenerateRequestBody {
    companyId: string;
    connectionId: string;
    requestBody?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
}

export interface GenerateCredentialsRequestBody {
    companyId: string;
    connectionId: string;
    requestBody?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
}
