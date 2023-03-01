import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SchemeAPIKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Your Base 64 encoded API Key" })
  apiKey: string;
}

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: SchemeAPIKey;
}