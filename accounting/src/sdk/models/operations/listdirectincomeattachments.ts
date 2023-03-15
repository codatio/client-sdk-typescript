import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListDirectIncomeAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=directIncomeId",
  })
  directIncomeId: string;
}

export class ListDirectIncomeAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDirectIncomeAttachmentsPathParams;
}

export class ListDirectIncomeAttachmentsAttachmentsAttachment extends SpeakeasyBase {
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

export class ListDirectIncomeAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListDirectIncomeAttachmentsAttachmentsAttachment,
  })
  @Expose({ name: "attachments" })
  @Type(() => ListDirectIncomeAttachmentsAttachmentsAttachment)
  attachments?: ListDirectIncomeAttachmentsAttachmentsAttachment[];
}

export class ListDirectIncomeAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: ListDirectIncomeAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
