import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCustomerAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}

export class GetCustomerAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetCustomerAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: GetCustomerAttachmentsSecurity;
}

export class GetCustomerAttachmentsAttachmentsAttachment extends SpeakeasyBase {
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

export class GetCustomerAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: GetCustomerAttachmentsAttachmentsAttachment })
  attachments?: GetCustomerAttachmentsAttachmentsAttachment[];
}

export class GetCustomerAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: GetCustomerAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}