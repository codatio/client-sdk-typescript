import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListDirectCostAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directCostId" })
  directCostId: string;
}

export class ListDirectCostAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListDirectCostAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDirectCostAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: ListDirectCostAttachmentsSecurity;
}

export class ListDirectCostAttachmentsAttachmentsAttachment extends SpeakeasyBase {
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

export class ListDirectCostAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: ListDirectCostAttachmentsAttachmentsAttachment })
  attachments?: ListDirectCostAttachmentsAttachmentsAttachment[];
}

export class ListDirectCostAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: ListDirectCostAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}