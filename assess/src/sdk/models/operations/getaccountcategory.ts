import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetAccountCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetAccountCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountCategoryPathParams;
}

// GetAccountCategoryCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class GetAccountCategoryCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetAccountCategoryCategorisedAccountModifiedDate extends SpeakeasyBase {
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

export class GetAccountCategoryCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetAccountCategoryCategorisedAccountAccountRef)
  accountRef?: GetAccountCategoryCategorisedAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => GetAccountCategoryCategorisedAccountModifiedDate)
  confirmed?: GetAccountCategoryCategorisedAccountModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "suggested" })
  @Type(() => GetAccountCategoryCategorisedAccountModifiedDate)
  suggested?: GetAccountCategoryCategorisedAccountModifiedDate;
}

export class GetAccountCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categorisedAccount?: GetAccountCategoryCategorisedAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}