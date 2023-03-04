import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetCompanyConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompanyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyConfigurationPathParams;
}

export class GetCompanyConfiguration200ApplicationJSONBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class GetCompanyConfiguration200ApplicationJSONCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class GetCompanyConfiguration200ApplicationJSONSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class GetCompanyConfiguration200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankAccount" })
  @Type(() => GetCompanyConfiguration200ApplicationJSONBankAccount)
  bankAccount?: GetCompanyConfiguration200ApplicationJSONBankAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => GetCompanyConfiguration200ApplicationJSONCustomer)
  customer?: GetCompanyConfiguration200ApplicationJSONCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "supplier" })
  @Type(() => GetCompanyConfiguration200ApplicationJSONSupplier)
  supplier?: GetCompanyConfiguration200ApplicationJSONSupplier;
}

export class GetCompanyConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCompanyConfiguration200ApplicationJSONObject?: GetCompanyConfiguration200ApplicationJSON;
}