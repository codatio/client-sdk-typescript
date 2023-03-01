import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class IsAgedCreditorsReportAvailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class IsAgedCreditorsReportAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IsAgedCreditorsReportAvailablePathParams;
}

export class IsAgedCreditorsReportAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  isAgedCreditorsReportAvailable200ApplicationJSONBoolean?: boolean;
}