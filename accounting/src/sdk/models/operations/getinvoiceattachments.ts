import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetInvoiceAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}

export class GetInvoiceAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class GetInvoiceAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: GetInvoiceAttachmentsSecurity;
}

export class GetInvoiceAttachmentsAttachmentsAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dateCreated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateCreated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "includeWhenSent" })
  includeWhenSent?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

export class GetInvoiceAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetInvoiceAttachmentsAttachmentsAttachment })
  @Expose({ name: "attachments" })
  @Type(() => GetInvoiceAttachmentsAttachmentsAttachment)
  attachments?: GetInvoiceAttachmentsAttachmentsAttachment[];
}

export class GetInvoiceAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: GetInvoiceAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}