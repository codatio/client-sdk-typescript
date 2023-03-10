import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RequestRecurringRevenueMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class RequestRecurringRevenueMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRecurringRevenueMetricsPathParams;
}

export class RequestRecurringRevenueMetrics200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class RequestRecurringRevenueMetrics200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({
    elemType: RequestRecurringRevenueMetrics200ApplicationJSONDimensionsItems,
  })
  @Expose({ name: "items" })
  @Type(() => RequestRecurringRevenueMetrics200ApplicationJSONDimensionsItems)
  items?: RequestRecurringRevenueMetrics200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class RequestRecurringRevenueMetrics200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class RequestRecurringRevenueMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => RequestRecurringRevenueMetrics200ApplicationJSONErrorsDetails)
  details?: RequestRecurringRevenueMetrics200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class RequestRecurringRevenueMetrics200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures
  )
  components?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures
  )
  measures?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures
  )
  components?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class RequestRecurringRevenueMetrics200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// RequestRecurringRevenueMetrics200ApplicationJSON
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
export class RequestRecurringRevenueMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: RequestRecurringRevenueMetrics200ApplicationJSONDimensions,
  })
  @Expose({ name: "dimensions" })
  @Type(() => RequestRecurringRevenueMetrics200ApplicationJSONDimensions)
  dimensions?: RequestRecurringRevenueMetrics200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({
    elemType: RequestRecurringRevenueMetrics200ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => RequestRecurringRevenueMetrics200ApplicationJSONErrors)
  errors?: RequestRecurringRevenueMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({
    elemType: RequestRecurringRevenueMetrics200ApplicationJSONMeasures,
  })
  @Expose({ name: "measures" })
  @Type(() => RequestRecurringRevenueMetrics200ApplicationJSONMeasures)
  measures?: RequestRecurringRevenueMetrics200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({
    elemType:
      RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems,
  })
  @Expose({ name: "reportData" })
  @Type(
    () => RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems
  )
  reportData?: RequestRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => RequestRecurringRevenueMetrics200ApplicationJSONReportInfo)
  reportInfo?: RequestRecurringRevenueMetrics200ApplicationJSONReportInfo;
}

export class RequestRecurringRevenueMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  requestRecurringRevenueMetrics200ApplicationJSONObject?: RequestRecurringRevenueMetrics200ApplicationJSON;
}
