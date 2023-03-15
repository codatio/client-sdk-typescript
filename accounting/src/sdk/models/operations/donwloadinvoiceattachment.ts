import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DonwloadInvoiceAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=attachmentId",
  })
  attachmentId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=invoiceId",
  })
  invoiceId: string;
}

export class DonwloadInvoiceAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DonwloadInvoiceAttachmentPathParams;
}

export class DonwloadInvoiceAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
