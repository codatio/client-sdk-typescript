/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatFile } from "./codatfile";

export class FileUpload extends SpeakeasyBase {
    /**
     * The file to be uploaded as an attachment.
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file: CodatFile;
}
