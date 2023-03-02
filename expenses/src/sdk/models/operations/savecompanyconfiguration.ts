import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class SaveCompanyConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class SaveCompanyConfigurationRequestBodyBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class SaveCompanyConfigurationRequestBodyCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class SaveCompanyConfigurationRequestBodySupplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class SaveCompanyConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankAccount" })
  @Type(() => SaveCompanyConfigurationRequestBodyBankAccount)
  bankAccount?: SaveCompanyConfigurationRequestBodyBankAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => SaveCompanyConfigurationRequestBodyCustomer)
  customer?: SaveCompanyConfigurationRequestBodyCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "supplier" })
  @Type(() => SaveCompanyConfigurationRequestBodySupplier)
  supplier?: SaveCompanyConfigurationRequestBodySupplier;
}

export class SaveCompanyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SaveCompanyConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SaveCompanyConfigurationRequestBody;
}

export class SaveCompanyConfiguration400ApplicationJSONValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

export class SaveCompanyConfiguration400ApplicationJSONValidationInternals extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

export class SaveCompanyConfiguration400ApplicationJSONValidationWarnings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

export class SaveCompanyConfiguration400ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SaveCompanyConfiguration400ApplicationJSONValidationErrors })
  @Expose({ name: "errors" })
  @Type(() => SaveCompanyConfiguration400ApplicationJSONValidationErrors)
  errors?: SaveCompanyConfiguration400ApplicationJSONValidationErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasErrors" })
  hasErrors?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasInternals" })
  hasInternals?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hasWarnings" })
  hasWarnings?: boolean;

  @SpeakeasyMetadata({ elemType: SaveCompanyConfiguration400ApplicationJSONValidationInternals })
  @Expose({ name: "internals" })
  @Type(() => SaveCompanyConfiguration400ApplicationJSONValidationInternals)
  internals?: SaveCompanyConfiguration400ApplicationJSONValidationInternals[];

  @SpeakeasyMetadata({ elemType: SaveCompanyConfiguration400ApplicationJSONValidationWarnings })
  @Expose({ name: "warnings" })
  @Type(() => SaveCompanyConfiguration400ApplicationJSONValidationWarnings)
  warnings?: SaveCompanyConfiguration400ApplicationJSONValidationWarnings[];
}

export class SaveCompanyConfiguration400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inner" })
  inner?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => SaveCompanyConfiguration400ApplicationJSONValidation)
  validation?: SaveCompanyConfiguration400ApplicationJSONValidation;
}

export class SaveCompanyConfiguration200ApplicationJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class SaveCompanyConfiguration200ApplicationJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class SaveCompanyConfiguration200ApplicationJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class SaveCompanyConfiguration200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankAccount" })
  @Type(() => SaveCompanyConfiguration200ApplicationJSONBankAccount)
  bankAccount?: SaveCompanyConfiguration200ApplicationJSONBankAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => SaveCompanyConfiguration200ApplicationJSONCustomer)
  customer?: SaveCompanyConfiguration200ApplicationJSONCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "supplier" })
  @Type(() => SaveCompanyConfiguration200ApplicationJSONSupplier)
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
  saveCompanyConfiguration400ApplicationJSONObject?: SaveCompanyConfiguration400ApplicationJSON;
}