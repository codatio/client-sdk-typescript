import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class UpdateAccountsCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class UpdateAccountsCategoriesRequestBodyCategoriesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

export class UpdateAccountsCategoriesRequestBodyCategories extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateAccountsCategoriesRequestBodyCategoriesAccountRef)
  accountRef?: UpdateAccountsCategoriesRequestBodyCategoriesAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  confirmed?: any;
}

export class UpdateAccountsCategoriesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdateAccountsCategoriesRequestBodyCategories,
  })
  @Expose({ name: "categories" })
  @Type(() => UpdateAccountsCategoriesRequestBodyCategories)
  categories?: UpdateAccountsCategoriesRequestBodyCategories[];
}

export class UpdateAccountsCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAccountsCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateAccountsCategoriesRequestBody;
}

// UpdateAccountsCategoriesCategorisedAccountAccountRef
/**
 * An object containing account reference data.
 **/
export class UpdateAccountsCategoriesCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdateAccountsCategoriesCategorisedAccountModifiedDate extends SpeakeasyBase {
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

export class UpdateAccountsCategoriesCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdateAccountsCategoriesCategorisedAccountAccountRef)
  accountRef?: UpdateAccountsCategoriesCategorisedAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => UpdateAccountsCategoriesCategorisedAccountModifiedDate)
  confirmed?: UpdateAccountsCategoriesCategorisedAccountModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "suggested" })
  @Type(() => UpdateAccountsCategoriesCategorisedAccountModifiedDate)
  suggested?: UpdateAccountsCategoriesCategorisedAccountModifiedDate;
}

export class UpdateAccountsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdateAccountsCategoriesCategorisedAccount })
  categorisedAccounts?: UpdateAccountsCategoriesCategorisedAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
