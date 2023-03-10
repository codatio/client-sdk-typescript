import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetEnhancedBalanceSheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetEnhancedBalanceSheetQueryParams extends SpeakeasyBase {
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
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetEnhancedBalanceSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnhancedBalanceSheetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEnhancedBalanceSheetQueryParams;
}

export class GetEnhancedBalanceSheet200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;
}

export class GetEnhancedBalanceSheet200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({
    elemType: GetEnhancedBalanceSheet200ApplicationJSONDimensionsItems,
  })
  @Expose({ name: "items" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONDimensionsItems)
  items?: GetEnhancedBalanceSheet200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetEnhancedBalanceSheet200ApplicationJSONErrorsDetails extends SpeakeasyBase {
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

export class GetEnhancedBalanceSheet200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONErrorsDetails)
  details?: GetEnhancedBalanceSheet200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetEnhancedBalanceSheet200ApplicationJSONMeasures extends SpeakeasyBase {
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

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
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
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures
  )
  components?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

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
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures
  )
  measures?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
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

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures
  )
  components?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

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
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures,
  })
  @Expose({ name: "measures" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures
  )
  measures?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasures,
  })
  @Expose({ name: "components" })
  @Type(
    () =>
      GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasures
  )
  components?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

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

export class GetEnhancedBalanceSheet200ApplicationJSONReportInfo extends SpeakeasyBase {
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

// GetEnhancedBalanceSheet200ApplicationJSON
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
export class GetEnhancedBalanceSheet200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetEnhancedBalanceSheet200ApplicationJSONDimensions,
  })
  @Expose({ name: "dimensions" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONDimensions)
  dimensions?: GetEnhancedBalanceSheet200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({
    elemType: GetEnhancedBalanceSheet200ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONErrors)
  errors?: GetEnhancedBalanceSheet200ApplicationJSONErrors[];

  @SpeakeasyMetadata({
    elemType: GetEnhancedBalanceSheet200ApplicationJSONMeasures,
  })
  @Expose({ name: "measures" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONMeasures)
  measures?: GetEnhancedBalanceSheet200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({
    elemType: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItems,
  })
  @Expose({ name: "reportData" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItems)
  reportData?: GetEnhancedBalanceSheet200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetEnhancedBalanceSheet200ApplicationJSONReportInfo)
  reportInfo?: GetEnhancedBalanceSheet200ApplicationJSONReportInfo;
}

export class GetEnhancedBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getEnhancedBalanceSheet200ApplicationJSONObject?: GetEnhancedBalanceSheet200ApplicationJSON;
}
