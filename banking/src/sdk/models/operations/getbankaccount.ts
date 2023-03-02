import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class GetBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankAccountPathParams;

  @SpeakeasyMetadata()
  security: GetBankAccountSecurity;
}

// GetBankAccountSourceModifiedDateAccountBalanceAmounts
/** 
 * An object containing bank balance data.
**/
export class GetBankAccountSourceModifiedDateAccountBalanceAmounts extends SpeakeasyBase {
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
export enum GetBankAccountSourceModifiedDateAccountIdentifiersTypeEnum {
    Account = "Account",
    Card = "Card",
    Credit = "Credit",
    Depository = "Depository",
    Investment = "Investment",
    Loan = "Loan",
    Other = "Other"
}

// GetBankAccountSourceModifiedDateAccountIdentifiers
/** 
 * An object containing bank account identification information.
**/
export class GetBankAccountSourceModifiedDateAccountIdentifiers extends SpeakeasyBase {
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
  type: GetBankAccountSourceModifiedDateAccountIdentifiersTypeEnum;
}

// GetBankAccountSourceModifiedDateAccountInstitution
/** 
 * The bank or other financial institution providing the account.
**/
export class GetBankAccountSourceModifiedDateAccountInstitution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum GetBankAccountSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit"
}

// GetBankAccountSourceModifiedDate
/** 
 * An account where payments are made or received, and bank transactions are recorded.
 * 
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).
**/
export class GetBankAccountSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  @Type(() => GetBankAccountSourceModifiedDateAccountBalanceAmounts)
  balance: GetBankAccountSourceModifiedDateAccountBalanceAmounts;

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
  @Type(() => GetBankAccountSourceModifiedDateAccountIdentifiers)
  identifiers: GetBankAccountSourceModifiedDateAccountIdentifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "informalName" })
  informalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  @Type(() => GetBankAccountSourceModifiedDateAccountInstitution)
  institution: GetBankAccountSourceModifiedDateAccountInstitution;

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
  type: GetBankAccountSourceModifiedDateTypeEnum;
}

export class GetBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetBankAccountSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}