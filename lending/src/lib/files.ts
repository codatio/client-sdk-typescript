/* tslint:disable */
/* eslint-disable */

export function bytesToBlob(content: unknown, contentType: string): Blob {
    void content;
    return new Blob([], { type: contentType });
}

export function getContentTypeFromFileName(fileName: string): string {
    void fileName;
    return "application/octet-stream";
}

export async function readableStreamToArrayBuffer(readable: unknown): Promise<ArrayBuffer> {
    void readable;
    return new ArrayBuffer(0);
}
