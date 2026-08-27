/* tslint:disable */
/* eslint-disable */

import type { CodatFile } from './codatfile';

export type AttachmentUpload = {
    file: CodatFile | Blob;
};

export function AttachmentUploadFromJSON(json: any): AttachmentUpload {
    return json;
}

export function AttachmentUploadToJSON(value?: AttachmentUpload | null): any {
    return value;
}
