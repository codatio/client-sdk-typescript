import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBankFeedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bankAccountId" })
  bankAccountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankFeedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetBankFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankFeedPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BankFeedBankAccount;

  @SpeakeasyMetadata()
  security: GetBankFeedSecurity;
}

export class GetBankFeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankFeedBankAccount?: shared.BankFeedBankAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}