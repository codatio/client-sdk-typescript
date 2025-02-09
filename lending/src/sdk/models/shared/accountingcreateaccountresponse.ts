/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Decimal as Decimal$ } from "../../types/decimal.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountStatus,
  AccountStatus$inboundSchema,
  AccountStatus$outboundSchema,
} from "./accountstatus.js";
import {
  AccountType,
  AccountType$inboundSchema,
  AccountType$outboundSchema,
} from "./accounttype.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
import {
  PropertieDataType,
  PropertieDataType$inboundSchema,
  PropertieDataType$outboundSchema,
} from "./propertiedatatype.js";
import {
  PushOperationChange,
  PushOperationChange$inboundSchema,
  PushOperationChange$Outbound,
  PushOperationChange$outboundSchema,
} from "./pushoperationchange.js";
import {
  PushOperationStatus,
  PushOperationStatus$inboundSchema,
  PushOperationStatus$outboundSchema,
} from "./pushoperationstatus.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";
import {
  Validation,
  Validation$inboundSchema,
  Validation$Outbound,
  Validation$outboundSchema,
} from "./validation.js";

/**
 * When querying Codat's data model, some data types return `validDatatypeLinks` metadata in the JSON response. This indicates where that object can be used as a reference—a _valid link_—when creating or updating other data.
 *
 * @remarks
 *
 * For example, `validDatatypeLinks` might indicate the following references:
 *
 * - Which tax rates are valid to use on the line item of a bill.
 * - Which items can be used when creating an invoice.
 *
 * You can use `validDatatypeLinks` to present your SMB customers with only valid choices when selecting objects from a list, for example.
 *
 * ## `validDatatypeLinks` example
 *
 * The following example uses the `Accounting.Accounts` data type. It shows that, on the linked integration, this account is valid as the account on a payment or bill payment; and as the account referenced on the line item of a direct income or direct cost. Because there is no valid link to Invoices or Bills, using this account on those data types will result in an error.
 *
 * ```json validDatatypeLinks for an account
 * {
 *             "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
 *             "nominalCode": "090",
 *             "name": "Business Bank Account",
 *             #...
 *             "validDatatypeLinks": [
 *                 {
 *                     "property": "Id",
 *                     "links": [
 *                         "Payment.AccountRef.Id",
 *                         "BillPayment.AccountRef.Id",
 *                         "DirectIncome.LineItems.AccountRef.Id",
 *                         "DirectCost.LineItems.AccountRef.Id"
 *                     ]
 *                 }
 *             ]
 *         }
 * ```
 *
 * ## Support for `validDatatypeLinks`
 *
 * Codat currently supports `validDatatypeLinks` for some data types on our Xero, QuickBooks Online, QuickBooks Desktop, Exact (NL), and Sage Business Cloud integrations.
 *
 * If you'd like us to extend support to more data types or integrations, suggest or vote for this on our <a href="https://portal.productboard.com/codat/5-product-roadmap">Product Roadmap</a>.
 */
export type AccountingCreateAccountResponseValidDataTypeLinks = {
  /**
   * The property from the account that can be linked.
   */
  property?: string | null | undefined;
  /**
   * Supported `dataTypes` that the record can be linked to.
   */
  links?: Array<string> | null | undefined;
};

/**
 * > **Language tip:** Accounts are also referred to as **chart of accounts**, **nominal accounts**, and **general ledger**.
 *
 * @remarks
 *
 * ## Overview
 *
 * Accounts are the categories a business uses to record accounting transactions. From the Accounts endpoints, you can retrieve a list of all accounts for a specified company.
 *
 * The categories for an account include:
 * * Asset
 * * Expense
 * * Income
 * * Liability
 * * Equity.
 *
 * The same account may have a different category based on the integration it is used in. For example, a current account (known as checking in the US) should be categorized as `Asset.Current` for Xero, and `Asset.Bank.Checking` for QuickBooks Online.
 *
 * At the same time, each integration may have its own requirements to the categories. For example, a Paypal account in Xero is of the `Asset.Bank` category and therefore requires additional properties to be provided.
 *
 * To determine the list of allowed categories for a specific integration, you can:
 * - Follow our [Create, update, delete data](https://docs.codat.io/using-the-api/push) guide and use the [Get create account model](https://docs.codat.io/lending-api#/operations/get-create-chartOfAccounts-model).
 * - Refer to the integration's own documentation.
 *
 * > **Accounts with no category**
 * >
 * > If an account is pulled from the chart of accounts and its nominal code does not lie within the category layout for the company's accounts, then the **type** is `Unknown`. The **fullyQualifiedCategory** and **fullyQualifiedName** fields return `null`.
 * >
 * > This approach gives a true representation of the company's accounts whilst preventing distorting financials such as a company's profit and loss and balance sheet reports.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingCreateAccountResponseAccountingAccount = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the account, unique for the company.
   */
  id?: string | undefined;
  /**
   * Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Codat system.
   */
  nominalCode?: string | null | undefined;
  /**
   * Name of the account.
   */
  name?: string | null | undefined;
  /**
   * Description for the account.
   */
  description?: string | null | undefined;
  /**
   * Full category of the account.
   *
   * @remarks
   *
   * For example, `Liability.Current` or `Income.Revenue`. To determine a list of possible categories for each integration, see our examples, follow our [Create, update, delete data](https://docs.codat.io/using-the-api/push) guide, or refer to the integration's own documentation.
   */
  fullyQualifiedCategory?: string | null | undefined;
  /**
   * Full name of the account, for example:
   *
   * @remarks
   * - `Cash On Hand`
   * - `Rents Held In Trust`
   * - `Fixed Asset`
   */
  fullyQualifiedName?: string | null | undefined;
  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  currency?: string | undefined;
  /**
   * Current balance in the account.
   */
  currentBalance?: Decimal$ | number | null | undefined;
  /**
   * Type of account
   */
  type?: AccountType | undefined;
  /**
   * Status of the account
   */
  status?: AccountStatus | undefined;
  /**
   * Confirms whether the account is a bank account or not.
   */
  isBankAccount?: boolean | undefined;
  /**
   * The validDatatypeLinks can be used to determine whether an account can be correctly mapped to another object; for example, accounts with a `type` of `income` might only support being used on an Invoice and Direct Income. For more information, see [Valid Data Type Links](/lending-api#/schemas/ValidDataTypeLinks).
   */
  validDatatypeLinks?:
    | Array<AccountingCreateAccountResponseValidDataTypeLinks>
    | null
    | undefined;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
  metadata?: Metadata | undefined;
};

export type AccountingCreateAccountResponse = {
  data?: AccountingCreateAccountResponseAccountingAccount | null | undefined;
  /**
   * Contains a single entry that communicates which record has changed and the manner in which it changed.
   */
  changes?: Array<PushOperationChange> | null | undefined;
  /**
   * Available data types
   */
  dataType?: PropertieDataType | undefined;
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId: string;
  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  pushOperationKey: string;
  /**
   * Unique identifier for a company's data connection.
   */
  dataConnectionKey: string;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  requestedOnUtc: string;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  completedOnUtc?: string | undefined;
  /**
   * Number of minutes the push operation must complete within before it times out.
   */
  timeoutInMinutes?: number | null | undefined;
  /**
   * Number of seconds the push operation must complete within before it times out.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  timeoutInSeconds?: number | null | undefined;
  /**
   * The current status of the push operation.
   */
  status: PushOperationStatus;
  /**
   * A message about the error.
   */
  errorMessage?: string | null | undefined;
  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
  validation?: Validation | undefined;
  /**
   * Push status code.
   */
  statusCode: number;
};

/** @internal */
export const AccountingCreateAccountResponseValidDataTypeLinks$inboundSchema:
  z.ZodType<
    AccountingCreateAccountResponseValidDataTypeLinks,
    z.ZodTypeDef,
    unknown
  > = z.object({
    property: z.nullable(z.string()).optional(),
    links: z.nullable(z.array(z.string())).optional(),
  });

/** @internal */
export type AccountingCreateAccountResponseValidDataTypeLinks$Outbound = {
  property?: string | null | undefined;
  links?: Array<string> | null | undefined;
};

/** @internal */
export const AccountingCreateAccountResponseValidDataTypeLinks$outboundSchema:
  z.ZodType<
    AccountingCreateAccountResponseValidDataTypeLinks$Outbound,
    z.ZodTypeDef,
    AccountingCreateAccountResponseValidDataTypeLinks
  > = z.object({
    property: z.nullable(z.string()).optional(),
    links: z.nullable(z.array(z.string())).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreateAccountResponseValidDataTypeLinks$ {
  /** @deprecated use `AccountingCreateAccountResponseValidDataTypeLinks$inboundSchema` instead. */
  export const inboundSchema =
    AccountingCreateAccountResponseValidDataTypeLinks$inboundSchema;
  /** @deprecated use `AccountingCreateAccountResponseValidDataTypeLinks$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreateAccountResponseValidDataTypeLinks$outboundSchema;
  /** @deprecated use `AccountingCreateAccountResponseValidDataTypeLinks$Outbound` instead. */
  export type Outbound =
    AccountingCreateAccountResponseValidDataTypeLinks$Outbound;
}

export function accountingCreateAccountResponseValidDataTypeLinksToJSON(
  accountingCreateAccountResponseValidDataTypeLinks:
    AccountingCreateAccountResponseValidDataTypeLinks,
): string {
  return JSON.stringify(
    AccountingCreateAccountResponseValidDataTypeLinks$outboundSchema.parse(
      accountingCreateAccountResponseValidDataTypeLinks,
    ),
  );
}

export function accountingCreateAccountResponseValidDataTypeLinksFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountingCreateAccountResponseValidDataTypeLinks,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreateAccountResponseValidDataTypeLinks$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AccountingCreateAccountResponseValidDataTypeLinks' from JSON`,
  );
}

/** @internal */
export const AccountingCreateAccountResponseAccountingAccount$inboundSchema:
  z.ZodType<
    AccountingCreateAccountResponseAccountingAccount,
    z.ZodTypeDef,
    unknown
  > = z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    nominalCode: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    description: z.nullable(z.string()).optional(),
    fullyQualifiedCategory: z.nullable(z.string()).optional(),
    fullyQualifiedName: z.nullable(z.string()).optional(),
    currency: z.string().optional(),
    currentBalance: z.nullable(z.number().transform(v => new Decimal$(v)))
      .optional(),
    type: AccountType$inboundSchema.optional(),
    status: AccountStatus$inboundSchema.optional(),
    isBankAccount: z.boolean().optional(),
    validDatatypeLinks: z.nullable(
      z.array(z.lazy(() =>
        AccountingCreateAccountResponseValidDataTypeLinks$inboundSchema
      )),
    ).optional(),
    supplementalData: SupplementalData$inboundSchema.optional(),
    metadata: Metadata$inboundSchema.optional(),
  });

/** @internal */
export type AccountingCreateAccountResponseAccountingAccount$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  nominalCode?: string | null | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  fullyQualifiedCategory?: string | null | undefined;
  fullyQualifiedName?: string | null | undefined;
  currency?: string | undefined;
  currentBalance?: number | null | undefined;
  type?: string | undefined;
  status?: string | undefined;
  isBankAccount?: boolean | undefined;
  validDatatypeLinks?:
    | Array<AccountingCreateAccountResponseValidDataTypeLinks$Outbound>
    | null
    | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const AccountingCreateAccountResponseAccountingAccount$outboundSchema:
  z.ZodType<
    AccountingCreateAccountResponseAccountingAccount$Outbound,
    z.ZodTypeDef,
    AccountingCreateAccountResponseAccountingAccount
  > = z.object({
    modifiedDate: z.string().optional(),
    sourceModifiedDate: z.string().optional(),
    id: z.string().optional(),
    nominalCode: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    description: z.nullable(z.string()).optional(),
    fullyQualifiedCategory: z.nullable(z.string()).optional(),
    fullyQualifiedName: z.nullable(z.string()).optional(),
    currency: z.string().optional(),
    currentBalance: z.nullable(
      z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
        typeof v === "number" ? v : v.toNumber()
      ),
    ).optional(),
    type: AccountType$outboundSchema.optional(),
    status: AccountStatus$outboundSchema.optional(),
    isBankAccount: z.boolean().optional(),
    validDatatypeLinks: z.nullable(
      z.array(z.lazy(() =>
        AccountingCreateAccountResponseValidDataTypeLinks$outboundSchema
      )),
    ).optional(),
    supplementalData: SupplementalData$outboundSchema.optional(),
    metadata: Metadata$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreateAccountResponseAccountingAccount$ {
  /** @deprecated use `AccountingCreateAccountResponseAccountingAccount$inboundSchema` instead. */
  export const inboundSchema =
    AccountingCreateAccountResponseAccountingAccount$inboundSchema;
  /** @deprecated use `AccountingCreateAccountResponseAccountingAccount$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreateAccountResponseAccountingAccount$outboundSchema;
  /** @deprecated use `AccountingCreateAccountResponseAccountingAccount$Outbound` instead. */
  export type Outbound =
    AccountingCreateAccountResponseAccountingAccount$Outbound;
}

export function accountingCreateAccountResponseAccountingAccountToJSON(
  accountingCreateAccountResponseAccountingAccount:
    AccountingCreateAccountResponseAccountingAccount,
): string {
  return JSON.stringify(
    AccountingCreateAccountResponseAccountingAccount$outboundSchema.parse(
      accountingCreateAccountResponseAccountingAccount,
    ),
  );
}

export function accountingCreateAccountResponseAccountingAccountFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountingCreateAccountResponseAccountingAccount,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreateAccountResponseAccountingAccount$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AccountingCreateAccountResponseAccountingAccount' from JSON`,
  );
}

/** @internal */
export const AccountingCreateAccountResponse$inboundSchema: z.ZodType<
  AccountingCreateAccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.nullable(
    z.lazy(() =>
      AccountingCreateAccountResponseAccountingAccount$inboundSchema
    ),
  ).optional(),
  changes: z.nullable(z.array(PushOperationChange$inboundSchema)).optional(),
  dataType: PropertieDataType$inboundSchema.optional(),
  companyId: z.string(),
  pushOperationKey: z.string(),
  dataConnectionKey: z.string(),
  requestedOnUtc: z.string(),
  completedOnUtc: z.string().optional(),
  timeoutInMinutes: z.nullable(z.number().int()).optional(),
  timeoutInSeconds: z.nullable(z.number().int()).optional(),
  status: PushOperationStatus$inboundSchema,
  errorMessage: z.nullable(z.string()).optional(),
  validation: Validation$inboundSchema.optional(),
  statusCode: z.number().int(),
});

/** @internal */
export type AccountingCreateAccountResponse$Outbound = {
  data?:
    | AccountingCreateAccountResponseAccountingAccount$Outbound
    | null
    | undefined;
  changes?: Array<PushOperationChange$Outbound> | null | undefined;
  dataType?: string | undefined;
  companyId: string;
  pushOperationKey: string;
  dataConnectionKey: string;
  requestedOnUtc: string;
  completedOnUtc?: string | undefined;
  timeoutInMinutes?: number | null | undefined;
  timeoutInSeconds?: number | null | undefined;
  status: string;
  errorMessage?: string | null | undefined;
  validation?: Validation$Outbound | undefined;
  statusCode: number;
};

/** @internal */
export const AccountingCreateAccountResponse$outboundSchema: z.ZodType<
  AccountingCreateAccountResponse$Outbound,
  z.ZodTypeDef,
  AccountingCreateAccountResponse
> = z.object({
  data: z.nullable(
    z.lazy(() =>
      AccountingCreateAccountResponseAccountingAccount$outboundSchema
    ),
  ).optional(),
  changes: z.nullable(z.array(PushOperationChange$outboundSchema)).optional(),
  dataType: PropertieDataType$outboundSchema.optional(),
  companyId: z.string(),
  pushOperationKey: z.string(),
  dataConnectionKey: z.string(),
  requestedOnUtc: z.string(),
  completedOnUtc: z.string().optional(),
  timeoutInMinutes: z.nullable(z.number().int()).optional(),
  timeoutInSeconds: z.nullable(z.number().int()).optional(),
  status: PushOperationStatus$outboundSchema,
  errorMessage: z.nullable(z.string()).optional(),
  validation: Validation$outboundSchema.optional(),
  statusCode: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreateAccountResponse$ {
  /** @deprecated use `AccountingCreateAccountResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingCreateAccountResponse$inboundSchema;
  /** @deprecated use `AccountingCreateAccountResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingCreateAccountResponse$outboundSchema;
  /** @deprecated use `AccountingCreateAccountResponse$Outbound` instead. */
  export type Outbound = AccountingCreateAccountResponse$Outbound;
}

export function accountingCreateAccountResponseToJSON(
  accountingCreateAccountResponse: AccountingCreateAccountResponse,
): string {
  return JSON.stringify(
    AccountingCreateAccountResponse$outboundSchema.parse(
      accountingCreateAccountResponse,
    ),
  );
}

export function accountingCreateAccountResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreateAccountResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCreateAccountResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreateAccountResponse' from JSON`,
  );
}
