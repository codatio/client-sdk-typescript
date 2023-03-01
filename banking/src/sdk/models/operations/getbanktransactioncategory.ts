import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBankTransactionCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionCategoryId" })
  transactionCategoryId: string;
}

export class GetBankTransactionCategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetBankTransactionCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankTransactionCategoryPathParams;

  @SpeakeasyMetadata()
  security: GetBankTransactionCategorySecurity;
}
export enum GetBankTransactionCategorySourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

// GetBankTransactionCategorySourceModifiedDate
/** 
 * The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.
**/
export class GetBankTransactionCategorySourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetBankTransactionCategorySourceModifiedDateStatusEnum;
}

export class GetBankTransactionCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetBankTransactionCategorySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}