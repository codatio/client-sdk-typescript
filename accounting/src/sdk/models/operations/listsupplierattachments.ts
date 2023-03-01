import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListSupplierAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=supplierId" })
  supplierId: string;
}

export class ListSupplierAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListSupplierAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSupplierAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: ListSupplierAttachmentsSecurity;
}

export class ListSupplierAttachmentsAttachmentsAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=includeWhenSent" })
  includeWhenSent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}

export class ListSupplierAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: ListSupplierAttachmentsAttachmentsAttachment })
  attachments?: ListSupplierAttachmentsAttachmentsAttachment[];
}

export class ListSupplierAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: ListSupplierAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}