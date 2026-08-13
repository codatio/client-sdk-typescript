/* tslint:disable */
/* eslint-disable */

export type CodatFile = {
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
    fileName: string;
};

export function CodatFileFromJSON(json: any): CodatFile {
    return json;
}

export function CodatFileToJSON(value?: CodatFile | null): any {
    return value;
}
