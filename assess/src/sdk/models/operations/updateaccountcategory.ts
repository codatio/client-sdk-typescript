import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class UpdateAccountCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class UpdateAccountCategoryRequestBodyChartOfAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class UpdateAccountCategoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => UpdateAccountCategoryRequestBodyChartOfAccountCategory)
  confirmed: UpdateAccountCategoryRequestBodyChartOfAccountCategory;
}

export class UpdateAccountCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAccountCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateAccountCategoryRequestBody;
}

// UpdateAccountCategoryCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class UpdateAccountCategoryCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateAccountCategoryCategorisedAccountModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class UpdateAccountCategoryCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateAccountCategoryCategorisedAccountAccountRef)
  accountRef?: UpdateAccountCategoryCategorisedAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => UpdateAccountCategoryCategorisedAccountModifiedDate)
  confirmed?: UpdateAccountCategoryCategorisedAccountModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "suggested" })
  @Type(() => UpdateAccountCategoryCategorisedAccountModifiedDate)
  suggested?: UpdateAccountCategoryCategorisedAccountModifiedDate;
}

export class UpdateAccountCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categorisedAccount?: UpdateAccountCategoryCategorisedAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}