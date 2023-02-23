import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersPeriodUnitEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodUnit" })
  periodUnit: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersPeriodUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersQueryParams;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONDimensionsItems })
  items?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONErrorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSON
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
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONDimensions })
  dimensions?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ data: "json, name=reportData", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItems })
  reportData?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONReportInfo;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONObject?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSON;
}