import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetCommerceRevenueMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}
export enum GetCommerceRevenueMetricsPeriodUnitEnum {
  Day = "Day",
  Week = "Week",
  Month = "Month",
  Year = "Year",
}

export class GetCommerceRevenueMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=includeDisplayNames",
  })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodLength",
  })
  periodLength: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodUnit",
  })
  periodUnit: GetCommerceRevenueMetricsPeriodUnitEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetCommerceRevenueMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommerceRevenueMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCommerceRevenueMetricsQueryParams;
}

export class GetCommerceRevenueMetrics200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetCommerceRevenueMetrics200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({
    elemType: GetCommerceRevenueMetrics200ApplicationJSONDimensionsItems,
  })
  @Expose({ name: "items" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONDimensionsItems)
  items?: GetCommerceRevenueMetrics200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetCommerceRevenueMetrics200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class GetCommerceRevenueMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONErrorsDetails)
  details?: GetCommerceRevenueMetrics200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetCommerceRevenueMetrics200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures
  )
  components?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures
  )
  measures?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures
  )
  components?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class GetCommerceRevenueMetrics200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// GetCommerceRevenueMetrics200ApplicationJSON
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
export class GetCommerceRevenueMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetCommerceRevenueMetrics200ApplicationJSONDimensions,
  })
  @Expose({ name: "dimensions" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONDimensions)
  dimensions?: GetCommerceRevenueMetrics200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({
    elemType: GetCommerceRevenueMetrics200ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONErrors)
  errors?: GetCommerceRevenueMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({
    elemType: GetCommerceRevenueMetrics200ApplicationJSONMeasures,
  })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONMeasures)
  measures?: GetCommerceRevenueMetrics200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({
    elemType: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItems,
  })
  @Expose({ name: "reportData" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItems)
  reportData?: GetCommerceRevenueMetrics200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetCommerceRevenueMetrics200ApplicationJSONReportInfo)
  reportInfo?: GetCommerceRevenueMetrics200ApplicationJSONReportInfo;
}

export class GetCommerceRevenueMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCommerceRevenueMetrics200ApplicationJSONObject?: GetCommerceRevenueMetrics200ApplicationJSON;
}
