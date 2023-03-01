import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdAssessExcelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}
export enum GetDataCompaniesCompanyIdAssessExcelReportTypeEnum {
    Audit = "audit"
}

export class GetDataCompaniesCompanyIdAssessExcelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: GetDataCompaniesCompanyIdAssessExcelReportTypeEnum;
}

export class GetDataCompaniesCompanyIdAssessExcelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessExcelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessExcelQueryParams;
}

export class GetDataCompaniesCompanyIdAssessExcel200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=inProgress" })
  inProgress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastGenerated" })
  lastGenerated?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastInvocationId" })
  lastInvocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=queued" })
  queued?: string;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}

export class GetDataCompaniesCompanyIdAssessExcelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdAssessExcel200ApplicationJSONObject?: GetDataCompaniesCompanyIdAssessExcel200ApplicationJSON;
}