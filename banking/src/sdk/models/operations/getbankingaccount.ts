import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetBankingAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankingAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankingAccountPathParams;
}

// GetBankingAccountSourceModifiedDateAccountBalanceAmounts
/** 
 * An object containing bank balance data.
**/
export class GetBankingAccountSourceModifiedDateAccountBalanceAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  current?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;
}
export enum GetBankingAccountSourceModifiedDateAccountIdentifiersTypeEnum {
    Account = "Account",
    Card = "Card",
    Credit = "Credit",
    Depository = "Depository",
    Investment = "Investment",
    Loan = "Loan",
    Other = "Other"
}

// GetBankingAccountSourceModifiedDateAccountIdentifiers
/** 
 * An object containing bank account identification information.
**/
export class GetBankingAccountSourceModifiedDateAccountIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankCode" })
  bankCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "bic" })
  bic?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "iban" })
  iban?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "maskedAccountNumber" })
  maskedAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankingAccountSourceModifiedDateAccountIdentifiersTypeEnum;
}

// GetBankingAccountSourceModifiedDateAccountInstitution
/** 
 * The bank or other financial institution providing the account.
**/
export class GetBankingAccountSourceModifiedDateAccountInstitution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum GetBankingAccountSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

// GetBankingAccountSourceModifiedDate
/** 
 * An account where payments are made or received, and bank transactions are recorded.
 * 
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).
**/
export class GetBankingAccountSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  @Type(() => GetBankingAccountSourceModifiedDateAccountBalanceAmounts)
  balance: GetBankingAccountSourceModifiedDateAccountBalanceAmounts;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "holder" })
  holder?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "identifiers" })
  @Type(() => GetBankingAccountSourceModifiedDateAccountIdentifiers)
  identifiers: GetBankingAccountSourceModifiedDateAccountIdentifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "informalName" })
  informalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  @Type(() => GetBankingAccountSourceModifiedDateAccountInstitution)
  institution: GetBankingAccountSourceModifiedDateAccountInstitution;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankingAccountSourceModifiedDateTypeEnum;
}

export class GetBankingAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetBankingAccountSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}