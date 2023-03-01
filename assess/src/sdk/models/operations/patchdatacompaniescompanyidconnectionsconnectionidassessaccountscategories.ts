import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBodyCategoriesAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBodyCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBodyCategoriesAccountRef;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: any;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBodyCategories })
  categories?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBodyCategories[];
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequestBody;
}

// PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccountAccountRef
/** 
 * An object containing account reference data.
**/
export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccountModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccountModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=suggested" })
  suggested?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccountModifiedDate;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccount })
  categorisedAccounts?: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesCategorisedAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}