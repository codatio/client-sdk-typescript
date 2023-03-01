import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SaveCompanyConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class SaveCompanyConfigurationApplicationWildcardPlusJsonBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationWildcardPlusJsonCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationWildcardPlusJsonSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationWildcardPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: SaveCompanyConfigurationApplicationWildcardPlusJsonBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: SaveCompanyConfigurationApplicationWildcardPlusJsonCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: SaveCompanyConfigurationApplicationWildcardPlusJsonSupplier;
}

export class SaveCompanyConfigurationApplicationJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: SaveCompanyConfigurationApplicationJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: SaveCompanyConfigurationApplicationJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: SaveCompanyConfigurationApplicationJSONSupplier;
}

export class SaveCompanyConfigurationApplicationJSONPatchPlusJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationJSONPatchPlusJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationJSONPatchPlusJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationApplicationJSONPatchPlusJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: SaveCompanyConfigurationApplicationJSONPatchPlusJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: SaveCompanyConfigurationApplicationJSONPatchPlusJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: SaveCompanyConfigurationApplicationJSONPatchPlusJSONSupplier;
}

export class SaveCompanyConfigurationTextJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationTextJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationTextJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfigurationTextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: SaveCompanyConfigurationTextJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: SaveCompanyConfigurationTextJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: SaveCompanyConfigurationTextJSONSupplier;
}

export class SaveCompanyConfigurationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  object?: SaveCompanyConfigurationApplicationWildcardPlusJson;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object1?: SaveCompanyConfigurationApplicationJSON;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  object2?: SaveCompanyConfigurationApplicationJSONPatchPlusJSON;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  object3?: SaveCompanyConfigurationTextJSON;
}

export class SaveCompanyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SaveCompanyConfigurationPathParams;

  @SpeakeasyMetadata()
  request?: SaveCompanyConfigurationRequests;
}

export class SaveCompanyConfiguration400ApplicationJSONValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

export class SaveCompanyConfiguration400ApplicationJSONValidationInternals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

export class SaveCompanyConfiguration400ApplicationJSONValidationWarnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

export class SaveCompanyConfiguration400ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: SaveCompanyConfiguration400ApplicationJSONValidationErrors })
  errors?: SaveCompanyConfiguration400ApplicationJSONValidationErrors[];

  @SpeakeasyMetadata({ data: "json, name=hasErrors" })
  hasErrors?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasInternals" })
  hasInternals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasWarnings" })
  hasWarnings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=internals", elemType: SaveCompanyConfiguration400ApplicationJSONValidationInternals })
  internals?: SaveCompanyConfiguration400ApplicationJSONValidationInternals[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: SaveCompanyConfiguration400ApplicationJSONValidationWarnings })
  warnings?: SaveCompanyConfiguration400ApplicationJSONValidationWarnings[];
}

export class SaveCompanyConfiguration400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=inner" })
  inner?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: SaveCompanyConfiguration400ApplicationJSONValidation;
}

export class SaveCompanyConfiguration200TextJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfiguration200TextJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfiguration200TextJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfiguration200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: SaveCompanyConfiguration200TextJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: SaveCompanyConfiguration200TextJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: SaveCompanyConfiguration200TextJSONSupplier;
}

export class SaveCompanyConfiguration200ApplicationJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfiguration200ApplicationJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfiguration200ApplicationJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class SaveCompanyConfiguration200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: SaveCompanyConfiguration200ApplicationJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: SaveCompanyConfiguration200ApplicationJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: SaveCompanyConfiguration200ApplicationJSONSupplier;
}

export class SaveCompanyConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  saveCompanyConfiguration200ApplicationJSONObject?: SaveCompanyConfiguration200ApplicationJSON;

  @SpeakeasyMetadata()
  saveCompanyConfiguration200TextJSONObject?: SaveCompanyConfiguration200TextJSON;

  @SpeakeasyMetadata()
  saveCompanyConfiguration200TextPlainObject?: string;

  @SpeakeasyMetadata()
  saveCompanyConfiguration400ApplicationJSONObject?: SaveCompanyConfiguration400ApplicationJSON;
}