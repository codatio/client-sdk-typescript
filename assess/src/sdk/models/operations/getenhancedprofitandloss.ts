import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class GetEnhancedProfitAndLossPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetEnhancedProfitAndLossQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetEnhancedProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnhancedProfitAndLossPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEnhancedProfitAndLossQueryParams;
}

export class GetEnhancedProfitAndLoss200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetEnhancedProfitAndLoss200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONDimensionsItems })
  @Expose({ name: "items" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONDimensionsItems)
  items?: GetEnhancedProfitAndLoss200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetEnhancedProfitAndLoss200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class GetEnhancedProfitAndLoss200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONErrorsDetails)
  details?: GetEnhancedProfitAndLoss200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetEnhancedProfitAndLoss200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures)
  components?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures)
  components?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures)
  measures?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures)
  components?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures)
  measures?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  @Expose({ name: "components" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures)
  components?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class GetEnhancedProfitAndLoss200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// GetEnhancedProfitAndLoss200ApplicationJSON
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
export class GetEnhancedProfitAndLoss200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONDimensions })
  @Expose({ name: "dimensions" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONDimensions)
  dimensions?: GetEnhancedProfitAndLoss200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONErrors })
  @Expose({ name: "errors" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONErrors)
  errors?: GetEnhancedProfitAndLoss200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONMeasures })
  @Expose({ name: "measures" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONMeasures)
  measures?: GetEnhancedProfitAndLoss200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ elemType: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems })
  @Expose({ name: "reportData" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems)
  reportData?: GetEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetEnhancedProfitAndLoss200ApplicationJSONReportInfo)
  reportInfo?: GetEnhancedProfitAndLoss200ApplicationJSONReportInfo;
}

export class GetEnhancedProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEnhancedProfitAndLoss200ApplicationJSONObject?: GetEnhancedProfitAndLoss200ApplicationJSON;
}