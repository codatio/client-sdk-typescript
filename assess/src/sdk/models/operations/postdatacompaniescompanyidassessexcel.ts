import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostDataCompaniesCompanyIdAssessExcelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}
export enum PostDataCompaniesCompanyIdAssessExcelReportTypeEnum {
    Audit = "audit"
}

export class PostDataCompaniesCompanyIdAssessExcelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: PostDataCompaniesCompanyIdAssessExcelReportTypeEnum;
}

export class PostDataCompaniesCompanyIdAssessExcelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDataCompaniesCompanyIdAssessExcelPathParams;

  @SpeakeasyMetadata()
  queryParams: PostDataCompaniesCompanyIdAssessExcelQueryParams;
}

export class PostDataCompaniesCompanyIdAssessExcel200ApplicationJSON extends SpeakeasyBase {
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

export class PostDataCompaniesCompanyIdAssessExcelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDataCompaniesCompanyIdAssessExcel200ApplicationJSONObject?: PostDataCompaniesCompanyIdAssessExcel200ApplicationJSON;
}