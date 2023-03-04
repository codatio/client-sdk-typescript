import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetTrackingCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=trackingCategoryId" })
  trackingCategoryId: string;
}

export class GetTrackingCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackingCategoryPathParams;
}
export enum GetTrackingCategorySourceModifiedDateTrackingCategoryStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}
export enum GetTrackingCategorySourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}
export enum GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}
export enum GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate })
  @Expose({ name: "subCategories" })
  @Type(() => GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate)
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate })
  @Expose({ name: "subCategories" })
  @Type(() => GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate)
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategorySourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDate })
  @Expose({ name: "subCategories" })
  @Type(() => GetTrackingCategorySourceModifiedDateSourceModifiedDate)
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetTrackingCategorySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}