/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AccountingAddress,
  AccountingAddress$inboundSchema,
  AccountingAddress$Outbound,
  AccountingAddress$outboundSchema,
} from "./accountingaddress.js";
import {
  Contact,
  Contact$inboundSchema,
  Contact$Outbound,
  Contact$outboundSchema,
} from "./contact.js";
import {
  CustomerStatus,
  CustomerStatus$inboundSchema,
  CustomerStatus$outboundSchema,
} from "./customerstatus.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";

/**
 * ## Overview
 *
 * @remarks
 *
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 *
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/lending-api#/schemas/Invoice).
 */
export type AccountingCustomer = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the customer, unique to the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Name of the customer as recorded in the accounting system, typically the company name.
   */
  customerName?: string | null | undefined;
  /**
   * Name of the main contact for the identified customer.
   */
  contactName?: string | null | undefined;
  /**
   * Email address the customer can be contacted by.
   */
  emailAddress?: string | null | undefined;
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
  defaultCurrency?: string | undefined;
  /**
   * Phone number the customer can be contacted by.
   */
  phone?: string | null | undefined;
  /**
   * An array of Addresses.
   */
  addresses?: Array<AccountingAddress> | null | undefined;
  /**
   * An array of Contacts.
   */
  contacts?: Array<Contact> | null | undefined;
  /**
   * Company number. In the UK, this is typically the Companies House company registration number.
   */
  registrationNumber?: string | null | undefined;
  /**
   * Company tax number.
   */
  taxNumber?: string | null | undefined;
  /**
   * Status of customer.
   */
  status: CustomerStatus;
  metadata?: Metadata | undefined;
  /**
   * Supplemental data is additional data you can include in our standard data types.
   *
   * @remarks
   *
   * It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
   */
  supplementalData?: SupplementalData | undefined;
};

/** @internal */
export const AccountingCustomer$inboundSchema: z.ZodType<
  AccountingCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  customerName: z.nullable(z.string()).optional(),
  contactName: z.nullable(z.string()).optional(),
  emailAddress: z.nullable(z.string()).optional(),
  defaultCurrency: z.string().optional(),
  phone: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(AccountingAddress$inboundSchema)).optional(),
  contacts: z.nullable(z.array(Contact$inboundSchema)).optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  status: CustomerStatus$inboundSchema,
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingCustomer$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  customerName?: string | null | undefined;
  contactName?: string | null | undefined;
  emailAddress?: string | null | undefined;
  defaultCurrency?: string | undefined;
  phone?: string | null | undefined;
  addresses?: Array<AccountingAddress$Outbound> | null | undefined;
  contacts?: Array<Contact$Outbound> | null | undefined;
  registrationNumber?: string | null | undefined;
  taxNumber?: string | null | undefined;
  status: string;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingCustomer$outboundSchema: z.ZodType<
  AccountingCustomer$Outbound,
  z.ZodTypeDef,
  AccountingCustomer
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  customerName: z.nullable(z.string()).optional(),
  contactName: z.nullable(z.string()).optional(),
  emailAddress: z.nullable(z.string()).optional(),
  defaultCurrency: z.string().optional(),
  phone: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(AccountingAddress$outboundSchema)).optional(),
  contacts: z.nullable(z.array(Contact$outboundSchema)).optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  status: CustomerStatus$outboundSchema,
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomer$ {
  /** @deprecated use `AccountingCustomer$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomer$inboundSchema;
  /** @deprecated use `AccountingCustomer$outboundSchema` instead. */
  export const outboundSchema = AccountingCustomer$outboundSchema;
  /** @deprecated use `AccountingCustomer$Outbound` instead. */
  export type Outbound = AccountingCustomer$Outbound;
}
