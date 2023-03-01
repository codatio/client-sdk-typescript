import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrPathParams;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONDimensionsItems })
  items?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONErrorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSON
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
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONDimensions })
  dimensions?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ data: "json, name=reportData", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItems })
  reportData?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONReportInfo;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONObject?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSON;
}