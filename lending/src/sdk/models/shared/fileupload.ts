/* tslint:disable */
/* eslint-disable */

import type { CodatFile } from './codatfile';

export type FileUpload = {
    file: CodatFile | Blob;
};

export function FileUploadFromJSON(json: any): FileUpload {
    return json;
}

export function FileUploadToJSON(value?: FileUpload | null): any {
    return value;
}
