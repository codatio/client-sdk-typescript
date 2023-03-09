import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class GetCreateUpdateInvoicesModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCreateUpdateInvoicesModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateUpdateInvoicesModelPathParams;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateInvoicesModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionChoice)
  options?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfo)
  validation?: GetCreateUpdateInvoicesModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateInvoicesModelPushOptionOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateUpdateInvoicesModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateUpdateInvoicesModelPushOptionPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateUpdateInvoicesModelPushOptionPushOptionProperty,
        value[key] as GetCreateUpdateInvoicesModelPushOptionPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateUpdateInvoicesModelPushOptionPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateInvoicesModelPushOptionOptionTypeEnum;
}

export class GetCreateUpdateInvoicesModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateUpdateInvoicesModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}