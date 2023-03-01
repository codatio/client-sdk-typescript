import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PutBankFeedsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PutBankFeedsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PutBankFeedsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBankFeedsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BankFeedBankAccount })
  request?: shared.BankFeedBankAccount[];

  @SpeakeasyMetadata()
  security: PutBankFeedsSecurity;
}

export class PutBankFeedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BankFeedBankAccount })
  bankFeedBankAccounts?: shared.BankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}