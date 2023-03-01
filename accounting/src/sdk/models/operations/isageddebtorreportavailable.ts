import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class IsAgedDebtorReportAvailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class IsAgedDebtorReportAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IsAgedDebtorReportAvailablePathParams;
}

export class IsAgedDebtorReportAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  isAgedDebtorReportAvailable200ApplicationJSONBoolean?: boolean;
}