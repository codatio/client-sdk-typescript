import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=accountId",
  })
  accountId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}
export enum GetBankAccountSourceModifiedDateAccountTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
}

export class GetBankAccountSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// GetBankAccountSourceModifiedDate
/**
 * > **Accessing Bank Accounts through Banking API**
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 **/
export class GetBankAccountSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: GetBankAccountSourceModifiedDateAccountTypeEnum;

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
  @Expose({ name: "iBan" })
  iBan?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  institution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetBankAccountSourceModifiedDateMetadata)
  metadata?: GetBankAccountSourceModifiedDateMetadata;

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
}

export class GetBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetBankAccountSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
