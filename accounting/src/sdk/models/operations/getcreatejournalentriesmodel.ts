import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class GetCreateJournalEntriesModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCreateJournalEntriesModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateJournalEntriesModelPathParams;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice)
  options?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo)
  validation?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateJournalEntriesModelPushOptionPushOptionPropertyOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation)
  information?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation)
  warnings?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateJournalEntriesModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionChoice)
  options?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionProperty,
        value[key] as GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateJournalEntriesModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfo)
  validation?: GetCreateJournalEntriesModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateJournalEntriesModelPushOptionOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCreateJournalEntriesModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCreateJournalEntriesModelPushOptionPushOptionProperty })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionProperty> = {};
    for (const key in value) {
      obj[key] = plainToInstance(GetCreateJournalEntriesModelPushOptionPushOptionProperty,
        value[key] as GetCreateJournalEntriesModelPushOptionPushOptionProperty,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, GetCreateJournalEntriesModelPushOptionPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateJournalEntriesModelPushOptionOptionTypeEnum;
}

export class GetCreateJournalEntriesModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateJournalEntriesModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}