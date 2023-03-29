/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class GetCreateDirectCostsModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateDirectCostsModelPushOptionPushOptionChoiceOptionTypeEnum;

  /**
   * Allowed value for field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  /**
   * Allowed value for field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  /**
   * Allowed value for field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  /**
   * Allowed value for field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  /**
   * Allowed value for field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}

export enum GetCreateDirectCostsModelPushOptionPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateDirectCostsModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () => GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateDirectCostsModelPushOptionPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateDirectCostsModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateDirectCostsModelPushOptionPushOptionPropertyPushValidationInfo;
}

export enum GetCreateDirectCostsModelPushOptionOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateDirectCostsModelPushOptionPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation
  )
  information?: GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateDirectCostsModelPushOptionPushValidationInfoPushFieldValidation[];
}

/**
 * OK
 */
export class GetCreateDirectCostsModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType: GetCreateDirectCostsModelPushOptionPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(() => GetCreateDirectCostsModelPushOptionPushOptionChoice)
  options?: GetCreateDirectCostsModelPushOptionPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType: GetCreateDirectCostsModelPushOptionPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateDirectCostsModelPushOptionPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateDirectCostsModelPushOptionPushOptionProperty,
          value[key] as GetCreateDirectCostsModelPushOptionPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateDirectCostsModelPushOptionPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateDirectCostsModelPushOptionOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateDirectCostsModelPushOptionPushValidationInfo)
  validation?: GetCreateDirectCostsModelPushOptionPushValidationInfo;
}

export class GetCreateDirectCostsModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  pushOption?: GetCreateDirectCostsModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
