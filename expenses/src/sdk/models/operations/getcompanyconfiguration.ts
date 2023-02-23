import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompanyConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompanyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyConfigurationPathParams;
}

export class GetCompanyConfiguration200TextJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetCompanyConfiguration200TextJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetCompanyConfiguration200TextJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetCompanyConfiguration200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: GetCompanyConfiguration200TextJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: GetCompanyConfiguration200TextJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: GetCompanyConfiguration200TextJSONSupplier;
}

export class GetCompanyConfiguration200ApplicationJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetCompanyConfiguration200ApplicationJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetCompanyConfiguration200ApplicationJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class GetCompanyConfiguration200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccount" })
  bankAccount?: GetCompanyConfiguration200ApplicationJSONBankAccount;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: GetCompanyConfiguration200ApplicationJSONCustomer;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: GetCompanyConfiguration200ApplicationJSONSupplier;
}

export class GetCompanyConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCompanyConfiguration200ApplicationJSONObject?: GetCompanyConfiguration200ApplicationJSON;

  @SpeakeasyMetadata()
  getCompanyConfiguration200TextJSONObject?: GetCompanyConfiguration200TextJSON;

  @SpeakeasyMetadata()
  getCompanyConfiguration200TextPlainObject?: string;
}