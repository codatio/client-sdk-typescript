import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetAllBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetAllBankAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetAllBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class GetAllBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllBankAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAllBankAccountQueryParams;

  @SpeakeasyMetadata()
  security: GetAllBankAccountSecurity;
}

export class GetAllBankAccount200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "iban" })
  iban?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  institution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overdraftLimit" })
  overdraftLimit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}

export class GetAllBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllBankAccount200ApplicationJSONObject?: GetAllBankAccount200ApplicationJSON;
}