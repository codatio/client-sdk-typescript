import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class GetCreateBillPaymentsModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCreateBillPaymentsModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateBillPaymentsModelPathParams;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateBillPaymentsModelPushOptionPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateBillPaymentsModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionChoice)
  options?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateBillPaymentsModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfo)
  validation?: GetCreateBillPaymentsModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateBillPaymentsModelPushOptionOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateBillPaymentsModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateBillPaymentsModelPushOptionPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateBillPaymentsModelPushOptionPushOptionProperty,
        value[key] as GetCreateBillPaymentsModelPushOptionPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateBillPaymentsModelPushOptionPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateBillPaymentsModelPushOptionOptionTypeEnum;
}

export class GetCreateBillPaymentsModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateBillPaymentsModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}