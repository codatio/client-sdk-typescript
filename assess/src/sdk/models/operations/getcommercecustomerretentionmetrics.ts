import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetCommerceCustomerRetentionMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}
export enum GetCommerceCustomerRetentionMetricsPeriodUnitEnum {
  Day = "Day",
  Week = "Week",
  Month = "Month",
  Year = "Year",
}

export class GetCommerceCustomerRetentionMetricsQueryParams extends SpeakeasyBase {
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
  periodUnit: GetCommerceCustomerRetentionMetricsPeriodUnitEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetCommerceCustomerRetentionMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommerceCustomerRetentionMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCommerceCustomerRetentionMetricsQueryParams;
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({
    elemType:
      GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensionsItems,
  })
  @Expose({ name: "items" })
  @Type(
    () => GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensionsItems
  )
  items?: GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(
    () => GetCommerceCustomerRetentionMetrics200ApplicationJSONErrorsDetails
  )
  details?: GetCommerceCustomerRetentionMetrics200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures
  )
  components?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures
  )
  measures?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures
  )
  components?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class GetCommerceCustomerRetentionMetrics200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// GetCommerceCustomerRetentionMetrics200ApplicationJSON
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
export class GetCommerceCustomerRetentionMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensions,
  })
  @Expose({ name: "dimensions" })
  @Type(() => GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensions)
  dimensions?: GetCommerceCustomerRetentionMetrics200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({
    elemType: GetCommerceCustomerRetentionMetrics200ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => GetCommerceCustomerRetentionMetrics200ApplicationJSONErrors)
  errors?: GetCommerceCustomerRetentionMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({
    elemType: GetCommerceCustomerRetentionMetrics200ApplicationJSONMeasures,
  })
  @Expose({ name: "measures" })
  @Type(() => GetCommerceCustomerRetentionMetrics200ApplicationJSONMeasures)
  measures?: GetCommerceCustomerRetentionMetrics200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({
    elemType:
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItems,
  })
  @Expose({ name: "reportData" })
  @Type(
    () =>
      GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItems
  )
  reportData?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetCommerceCustomerRetentionMetrics200ApplicationJSONReportInfo)
  reportInfo?: GetCommerceCustomerRetentionMetrics200ApplicationJSONReportInfo;
}

export class GetCommerceCustomerRetentionMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCommerceCustomerRetentionMetrics200ApplicationJSONObject?: GetCommerceCustomerRetentionMetrics200ApplicationJSON;
}
