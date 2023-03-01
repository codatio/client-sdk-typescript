import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class PostBillAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostBillAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class PostBillAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBillAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: PostBillAttachmentsSecurity;
}

export class PostBillAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}