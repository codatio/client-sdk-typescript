import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenuePeriodUnitEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodUnit" })
  periodUnit: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenuePeriodUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenuePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryParams;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONDimensionsItems })
  items?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONErrorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSON
/** 
 * Assess reports follow a consistent structure. Reports contain four sections of information:
 * 
 * 1. Report definition information such as:
 *   a. The report info (e.g. enhanced_profit_and_loss).
 *   b. The display name of the report (e.g. Enhanced Profit and Loss).
 * 2. Information about the dimension contained in the reports such as:
 *   a. The type of dimension (e.g. datetime, recordRef).
 *   b. The display name of the dimension (e.g. Period, Category type, Category sub type).
 *   c. The details about each item within the dimension (e.g. displayName:"Jan 2022", start:"...", end:"...", id:"...", name:"...").
 * 3. Information about the measures contained in the report such as:
 *   a. The display name of the measure (e.g. value of account, percentage change).
 *   b. The type of the measure (e.g. currency, percentage).
 *   c. The unit of the measure (e.g. %, GBP).
 * 4. The data for the report. When the *includeDisplayName* parameter is set to *true*, it shows the *dimensionDisplayName* and *itemDisplayName* to make the data human-readable. The default setting for *includeDisplayName* is *false*.
 * 
 * Reports can be rendered as follows (ordering is implicit rather than explicit):
 * 
 * ![A table showing an example of how a report can be rendered](https://files.readme.io/1fa20ca-Report1.png)
 * 
 * # Data model
 * 
 * ## Dimensions
**/
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONDimensions })
  dimensions?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ data: "json, name=reportData", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItems })
  reportData?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONReportInfo;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONObject?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSON;
}