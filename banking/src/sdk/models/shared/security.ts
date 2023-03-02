import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}