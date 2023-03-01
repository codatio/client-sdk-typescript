import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListAllBankTransactionscountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListAllBankTransactionscountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListAllBankTransactionscountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ListAllBankTransactionscountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAllBankTransactionscountPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAllBankTransactionscountQueryParams;

  @SpeakeasyMetadata()
  security: ListAllBankTransactionscountSecurity;
}

export class ListAllBankTransactionscountLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListAllBankTransactionscountLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListAllBankTransactionscountLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListAllBankTransactionscountLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListAllBankTransactionscountLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListAllBankTransactionscountLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListAllBankTransactionscountLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListAllBankTransactionscountLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListAllBankTransactionscountLinksLinksSelf;
}
export enum ListAllBankTransactionscountLinksResultsTransactionsTransactionTypeEnum {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
    Int = "Int",
    Div = "Div",
    Fee = "Fee",
    SerChg = "SerChg",
    Dep = "Dep",
    Atm = "Atm",
    Pos = "Pos",
    Xfer = "Xfer",
    Check = "Check",
    Payment = "Payment",
    Cash = "Cash",
    DirectDep = "DirectDep",
    DirectDebit = "DirectDebit",
    RepeatPmt = "RepeatPmt",
    Other = "Other"
}

export class ListAllBankTransactionscountLinksResultsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=counterparty" })
  counterparty?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reconciled" })
  reconciled: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType: ListAllBankTransactionscountLinksResultsTransactionsTransactionTypeEnum;
}

// ListAllBankTransactionscountLinksResults
/** 
 * > **Accessing Bank Accounts through Banking API**
 * > 
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)
 * 
 * > View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Transactional banking data for a specific company and account.
 * 
 * Bank transactions include the:
 * * Amount of the transaction.
 * * Current account balance.
 * * Transaction type, for example, credit, debit, or transfer.
**/
export class ListAllBankTransactionscountLinksResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: ListAllBankTransactionscountLinksResultsTransactions })
  transactions?: ListAllBankTransactionscountLinksResultsTransactions[];
}

// ListAllBankTransactionscountLinks
/** 
 * Codat's Paging Model
**/
export class ListAllBankTransactionscountLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListAllBankTransactionscountLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListAllBankTransactionscountLinksResults })
  results?: ListAllBankTransactionscountLinksResults[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListAllBankTransactionscountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListAllBankTransactionscountLinks;
}