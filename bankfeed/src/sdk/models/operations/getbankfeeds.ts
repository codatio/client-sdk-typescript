import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBankFeedsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankFeedsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetBankFeedsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankFeedsPathParams;

  @SpeakeasyMetadata()
  security: GetBankFeedsSecurity;
}

export class GetBankFeedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BankFeedBankAccount })
  bankFeedBankAccounts?: shared.BankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}