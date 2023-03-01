import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsPathParams;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isCompound" })
  isCompound?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxComponents", elemType: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONSourceModifiedDate })
  taxComponents?: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONSourceModifiedDate[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONObject?: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSON;
}