import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAccountingMarketingMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}
export enum GetAccountingMarketingMetricsPeriodUnitEnum {
  Day = "Day",
  Week = "Week",
  Month = "Month",
  Year = "Year",
}

export class GetAccountingMarketingMetricsQueryParams extends SpeakeasyBase {
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
  periodUnit: GetAccountingMarketingMetricsPeriodUnitEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=showInputValues",
  })
  showInputValues?: boolean;
}

export class GetAccountingMarketingMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountingMarketingMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountingMarketingMetricsQueryParams;
}

export class GetAccountingMarketingMetrics200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetAccountingMarketingMetrics200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({
    elemType: GetAccountingMarketingMetrics200ApplicationJSONDimensionsItems,
  })
  @Expose({ name: "items" })
  @Type(() => GetAccountingMarketingMetrics200ApplicationJSONDimensionsItems)
  items?: GetAccountingMarketingMetrics200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetAccountingMarketingMetrics200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class GetAccountingMarketingMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => GetAccountingMarketingMetrics200ApplicationJSONErrorsDetails)
  details?: GetAccountingMarketingMetrics200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetAccountingMarketingMetrics200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures
  )
  components?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures
  )
  measures?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures
  )
  components?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class GetAccountingMarketingMetrics200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// GetAccountingMarketingMetrics200ApplicationJSON
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
export class GetAccountingMarketingMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetAccountingMarketingMetrics200ApplicationJSONDimensions,
  })
  @Expose({ name: "dimensions" })
  @Type(() => GetAccountingMarketingMetrics200ApplicationJSONDimensions)
  dimensions?: GetAccountingMarketingMetrics200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({
    elemType: GetAccountingMarketingMetrics200ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => GetAccountingMarketingMetrics200ApplicationJSONErrors)
  errors?: GetAccountingMarketingMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({
    elemType: GetAccountingMarketingMetrics200ApplicationJSONMeasures,
  })
  @Expose({ name: "measures" })
  @Type(() => GetAccountingMarketingMetrics200ApplicationJSONMeasures)
  measures?: GetAccountingMarketingMetrics200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({
    elemType:
      GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItems,
  })
  @Expose({ name: "reportData" })
  @Type(
    () => GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItems
  )
  reportData?: GetAccountingMarketingMetrics200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetAccountingMarketingMetrics200ApplicationJSONReportInfo)
  reportInfo?: GetAccountingMarketingMetrics200ApplicationJSONReportInfo;
}

export class GetAccountingMarketingMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getAccountingMarketingMetrics200ApplicationJSONObject?: GetAccountingMarketingMetrics200ApplicationJSON;
}
