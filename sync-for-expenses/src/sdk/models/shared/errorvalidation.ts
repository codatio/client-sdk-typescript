/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorValidationItem } from "./errorvalidationitem";
import { Expose, Type } from "class-transformer";

/**
 * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
 */
export class ErrorValidation extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ErrorValidationItem })
    @Expose({ name: "errors" })
    @Type(() => ErrorValidationItem)
    errors?: ErrorValidationItem[];

    @SpeakeasyMetadata({ elemType: ErrorValidationItem })
    @Expose({ name: "warnings" })
    @Type(() => ErrorValidationItem)
    warnings?: ErrorValidationItem[];
}
