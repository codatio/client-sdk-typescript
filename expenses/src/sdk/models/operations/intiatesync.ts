import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class IntiateSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class IntiateSyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datasetIds" })
  datasetIds?: string[];
}

export class IntiateSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntiateSyncPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IntiateSyncRequestBody;
}

export class IntiateSync422ApplicationJSONValidationErrors extends SpeakeasyBase {
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

export class IntiateSync422ApplicationJSONValidationInternals extends SpeakeasyBase {
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

export class IntiateSync422ApplicationJSONValidationWarnings extends SpeakeasyBase {
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

export class IntiateSync422ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: IntiateSync422ApplicationJSONValidationErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => IntiateSync422ApplicationJSONValidationErrors)
  errors?: IntiateSync422ApplicationJSONValidationErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasErrors" })
  hasErrors?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasInternals" })
  hasInternals?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasWarnings" })
  hasWarnings?: boolean;

  @SpeakeasyMetadata({
    elemType: IntiateSync422ApplicationJSONValidationInternals,
  })
  @Expose({ name: "internals" })
  @Type(() => IntiateSync422ApplicationJSONValidationInternals)
  internals?: IntiateSync422ApplicationJSONValidationInternals[];

  @SpeakeasyMetadata({
    elemType: IntiateSync422ApplicationJSONValidationWarnings,
  })
  @Expose({ name: "warnings" })
  @Type(() => IntiateSync422ApplicationJSONValidationWarnings)
  warnings?: IntiateSync422ApplicationJSONValidationWarnings[];
}

export class IntiateSync422ApplicationJSON extends SpeakeasyBase {
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
  @Type(() => IntiateSync422ApplicationJSONValidation)
  validation?: IntiateSync422ApplicationJSONValidation;
}

export class IntiateSync404ApplicationJSONValidationErrors extends SpeakeasyBase {
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

export class IntiateSync404ApplicationJSONValidationInternals extends SpeakeasyBase {
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

export class IntiateSync404ApplicationJSONValidationWarnings extends SpeakeasyBase {
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

export class IntiateSync404ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: IntiateSync404ApplicationJSONValidationErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => IntiateSync404ApplicationJSONValidationErrors)
  errors?: IntiateSync404ApplicationJSONValidationErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasErrors" })
  hasErrors?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasInternals" })
  hasInternals?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasWarnings" })
  hasWarnings?: boolean;

  @SpeakeasyMetadata({
    elemType: IntiateSync404ApplicationJSONValidationInternals,
  })
  @Expose({ name: "internals" })
  @Type(() => IntiateSync404ApplicationJSONValidationInternals)
  internals?: IntiateSync404ApplicationJSONValidationInternals[];

  @SpeakeasyMetadata({
    elemType: IntiateSync404ApplicationJSONValidationWarnings,
  })
  @Expose({ name: "warnings" })
  @Type(() => IntiateSync404ApplicationJSONValidationWarnings)
  warnings?: IntiateSync404ApplicationJSONValidationWarnings[];
}

export class IntiateSync404ApplicationJSON extends SpeakeasyBase {
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
  @Type(() => IntiateSync404ApplicationJSONValidation)
  validation?: IntiateSync404ApplicationJSONValidation;
}

export class IntiateSync400ApplicationJSONValidationErrors extends SpeakeasyBase {
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

export class IntiateSync400ApplicationJSONValidationInternals extends SpeakeasyBase {
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

export class IntiateSync400ApplicationJSONValidationWarnings extends SpeakeasyBase {
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

export class IntiateSync400ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: IntiateSync400ApplicationJSONValidationErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => IntiateSync400ApplicationJSONValidationErrors)
  errors?: IntiateSync400ApplicationJSONValidationErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasErrors" })
  hasErrors?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasInternals" })
  hasInternals?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasWarnings" })
  hasWarnings?: boolean;

  @SpeakeasyMetadata({
    elemType: IntiateSync400ApplicationJSONValidationInternals,
  })
  @Expose({ name: "internals" })
  @Type(() => IntiateSync400ApplicationJSONValidationInternals)
  internals?: IntiateSync400ApplicationJSONValidationInternals[];

  @SpeakeasyMetadata({
    elemType: IntiateSync400ApplicationJSONValidationWarnings,
  })
  @Expose({ name: "warnings" })
  @Type(() => IntiateSync400ApplicationJSONValidationWarnings)
  warnings?: IntiateSync400ApplicationJSONValidationWarnings[];
}

export class IntiateSync400ApplicationJSON extends SpeakeasyBase {
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
  @Type(() => IntiateSync400ApplicationJSONValidation)
  validation?: IntiateSync400ApplicationJSONValidation;
}

export class IntiateSync202ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "syncId" })
  syncId?: string;
}

export class IntiateSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  intiateSync202ApplicationJSONObject?: IntiateSync202ApplicationJSON;

  @SpeakeasyMetadata()
  intiateSync400ApplicationJSONObject?: IntiateSync400ApplicationJSON;

  @SpeakeasyMetadata()
  intiateSync404ApplicationJSONObject?: IntiateSync404ApplicationJSON;

  @SpeakeasyMetadata()
  intiateSync422ApplicationJSONObject?: IntiateSync422ApplicationJSON;
}
