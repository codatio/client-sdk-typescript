import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DownloadDirectIncomeAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
  attachmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directIncomeId" })
  directIncomeId: string;
}

export class DownloadDirectIncomeAttachmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class DownloadDirectIncomeAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadDirectIncomeAttachmentPathParams;

  @SpeakeasyMetadata()
  security: DownloadDirectIncomeAttachmentSecurity;
}

export class DownloadDirectIncomeAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}