import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTrackingCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=trackingCategoryId" })
  trackingCategoryId: string;
}

export class GetTrackingCategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetTrackingCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackingCategoryPathParams;

  @SpeakeasyMetadata()
  security: GetTrackingCategorySecurity;
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subCategories", elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate })
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subCategories", elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate })
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategorySourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetTrackingCategorySourceModifiedDateTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subCategories", elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDate })
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetTrackingCategorySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}