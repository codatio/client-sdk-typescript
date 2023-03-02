import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isCompound" })
  isCompound?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONSourceModifiedDate })
  @Expose({ name: "taxComponents" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONSourceModifiedDate)
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