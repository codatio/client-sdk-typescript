import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequestBodyChartOfAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequestBodyChartOfAccountCategory;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequestBody;
}

// PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=suggested" })
  suggested?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccountModifiedDate;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categorisedAccount?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesCategorisedAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}