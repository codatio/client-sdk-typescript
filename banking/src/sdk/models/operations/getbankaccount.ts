import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
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
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
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
  @SpeakeasyMetadata({ data: "json, name=bankCode" })
  bankCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=maskedAccountNumber" })
  maskedAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetBankAccountSourceModifiedDateAccountIdentifiersTypeEnum;
}

// GetBankAccountSourceModifiedDateAccountInstitution
/** 
 * The bank or other financial institution providing the account.
**/
export class GetBankAccountSourceModifiedDateAccountInstitution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: GetBankAccountSourceModifiedDateAccountBalanceAmounts;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=holder" })
  holder?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers" })
  identifiers: GetBankAccountSourceModifiedDateAccountIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=informalName" })
  informalName?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution: GetBankAccountSourceModifiedDateAccountInstitution;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
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