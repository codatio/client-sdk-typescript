/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListBillAttachmentsRequest extends SpeakeasyBase {
  /**
   * Unique identifier for a bill
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=billId",
  })
  billId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListBillAttachmentsResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  attachmentsDataset?: shared.AttachmentsDataset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}