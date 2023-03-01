import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListDirectIncomeAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directIncomeId" })
  directIncomeId: string;
}

export class ListDirectIncomeAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListDirectIncomeAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDirectIncomeAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: ListDirectIncomeAttachmentsSecurity;
}

export class ListDirectIncomeAttachmentsAttachmentsAttachment extends SpeakeasyBase {
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

export class ListDirectIncomeAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: ListDirectIncomeAttachmentsAttachmentsAttachment })
  attachments?: ListDirectIncomeAttachmentsAttachmentsAttachment[];
}

export class ListDirectIncomeAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: ListDirectIncomeAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}