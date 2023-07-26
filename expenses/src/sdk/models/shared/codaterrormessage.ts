/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CodatErrorMessageValidationErrors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "itemId" })
    itemId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ruleId" })
    ruleId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "validatorName" })
    validatorName?: string;
}

export class CodatErrorMessageValidationInternals extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "itemId" })
    itemId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ruleId" })
    ruleId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "validatorName" })
    validatorName?: string;
}

export class CodatErrorMessageValidationWarnings extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "itemId" })
    itemId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ruleId" })
    ruleId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "validatorName" })
    validatorName?: string;
}

export class CodatErrorMessageValidation extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CodatErrorMessageValidationErrors })
    @Expose({ name: "errors" })
    @Type(() => CodatErrorMessageValidationErrors)
    errors?: CodatErrorMessageValidationErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "hasErrors" })
    hasErrors?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hasInternals" })
    hasInternals?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hasWarnings" })
    hasWarnings?: boolean;

    @SpeakeasyMetadata({ elemType: CodatErrorMessageValidationInternals })
    @Expose({ name: "internals" })
    @Type(() => CodatErrorMessageValidationInternals)
    internals?: CodatErrorMessageValidationInternals[];

    @SpeakeasyMetadata({ elemType: CodatErrorMessageValidationWarnings })
    @Expose({ name: "warnings" })
    @Type(() => CodatErrorMessageValidationWarnings)
    warnings?: CodatErrorMessageValidationWarnings[];
}

/**
 * If model is incorrect
 */
export class CodatErrorMessage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "canBeRetried" })
    canBeRetried?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "correlationId" })
    correlationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "detailedErrorCode" })
    detailedErrorCode?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "inner" })
    inner?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    service?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "validation" })
    @Type(() => CodatErrorMessageValidation)
    validation?: CodatErrorMessageValidation;
}
