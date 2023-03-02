import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class GetRecurringRevenueMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetRecurringRevenueMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecurringRevenueMetricsPathParams;
}

export class GetRecurringRevenueMetrics200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetRecurringRevenueMetrics200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONDimensionsItems })
  @Expose({ name: "items" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONDimensionsItems)
  items?: GetRecurringRevenueMetrics200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetRecurringRevenueMetrics200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class GetRecurringRevenueMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONErrorsDetails)
  details?: GetRecurringRevenueMetrics200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetRecurringRevenueMetrics200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures)
  components?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures)
  components?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures)
  components?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures)
  measures?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures)
  components?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class GetRecurringRevenueMetrics200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// GetRecurringRevenueMetrics200ApplicationJSON
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
export class GetRecurringRevenueMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONDimensions })
  @Expose({ name: "dimensions" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONDimensions)
  dimensions?: GetRecurringRevenueMetrics200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONErrors })
  @Expose({ name: "errors" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONErrors)
  errors?: GetRecurringRevenueMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONMeasures)
  measures?: GetRecurringRevenueMetrics200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ elemType: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems })
  @Expose({ name: "reportData" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems)
  reportData?: GetRecurringRevenueMetrics200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetRecurringRevenueMetrics200ApplicationJSONReportInfo)
  reportInfo?: GetRecurringRevenueMetrics200ApplicationJSONReportInfo;
}

export class GetRecurringRevenueMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRecurringRevenueMetrics200ApplicationJSONObject?: GetRecurringRevenueMetrics200ApplicationJSON;
}