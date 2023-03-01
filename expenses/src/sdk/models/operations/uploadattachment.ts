import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
  syncId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}

export class UploadAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadAttachmentPathParams;
}

export class UploadAttachment200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}

export class UploadAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadAttachment200ApplicationJSONObject?: UploadAttachment200ApplicationJSON;
}