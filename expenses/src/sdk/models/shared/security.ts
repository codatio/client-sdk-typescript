import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SchemeAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authorization: SchemeAuthorization;
}