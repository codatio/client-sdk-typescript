import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=suggested" })
  suggested?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountModifiedDate;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categorisedAccount?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}