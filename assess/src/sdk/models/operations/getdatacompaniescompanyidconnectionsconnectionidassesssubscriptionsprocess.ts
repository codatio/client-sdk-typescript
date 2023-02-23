import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessPathParams;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONDimensionsItems })
  items?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONErrorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONErrorsDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasuresMeasures[];
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasures })
  components?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItemsReportComponentMeasures[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProp1" })
  additionalProp1?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp2" })
  additionalProp2?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProp3" })
  additionalProp3?: string;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSON
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
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONDimensions })
  dimensions?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONDimensions[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONMeasures })
  measures?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONMeasures[];

  @SpeakeasyMetadata({ data: "json, name=reportData", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItems })
  reportData?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportDimensionsItems[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONReportInfo;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONObject?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSON;
}