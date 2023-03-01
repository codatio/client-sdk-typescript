import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossQueryParams;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONDimensionsItems })
  items?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONErrorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSON
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
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONDimensions })
  dimensions?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ data: "json, name=reportData", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems })
  reportData?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONReportInfo;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONObject?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSON;
}