import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class GetCommerceLifetimeValueMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}
export enum GetCommerceLifetimeValueMetricsPeriodUnitEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export class GetCommerceLifetimeValueMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodUnit" })
  periodUnit: GetCommerceLifetimeValueMetricsPeriodUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetCommerceLifetimeValueMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommerceLifetimeValueMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCommerceLifetimeValueMetricsQueryParams;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONDimensionsItems })
  @Expose({ name: "items" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONDimensionsItems)
  items?: GetCommerceLifetimeValueMetrics200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONErrorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp1" })
  additionalProp1?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp2" })
  additionalProp2?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp3" })
  additionalProp3?: string[];
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONErrorsDetails)
  details?: GetCommerceLifetimeValueMetrics200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "units" })
  units?: string;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dimension" })
  dimension?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  item?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures)
  components?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata()
  @Expose({ name: "dimension" })
  dimension?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  item?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures)
  components?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata()
  @Expose({ name: "dimension" })
  dimension?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  item?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures)
  components?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata()
  @Expose({ name: "dimension" })
  dimension?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  item?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures)
  measures?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures)
  components?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

  @SpeakeasyMetadata()
  @Expose({ name: "dimension" })
  dimension?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  item?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemDisplayName" })
  itemDisplayName?: string;
}

export class GetCommerceLifetimeValueMetrics200ApplicationJSONReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp3" })
  additionalProp3?: string;
}

// GetCommerceLifetimeValueMetrics200ApplicationJSON
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
export class GetCommerceLifetimeValueMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONDimensions })
  @Expose({ name: "dimensions" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONDimensions)
  dimensions?: GetCommerceLifetimeValueMetrics200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONErrors })
  @Expose({ name: "errors" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONErrors)
  errors?: GetCommerceLifetimeValueMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONMeasures)
  measures?: GetCommerceLifetimeValueMetrics200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ elemType: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItems })
  @Expose({ name: "reportData" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItems)
  reportData?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetCommerceLifetimeValueMetrics200ApplicationJSONReportInfo)
  reportInfo?: GetCommerceLifetimeValueMetrics200ApplicationJSONReportInfo;
}

export class GetCommerceLifetimeValueMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCommerceLifetimeValueMetrics200ApplicationJSONObject?: GetCommerceLifetimeValueMetrics200ApplicationJSON;
}