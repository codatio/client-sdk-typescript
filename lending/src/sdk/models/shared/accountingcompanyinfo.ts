/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingAddress,
  AccountingAddress$inboundSchema,
  AccountingAddress$Outbound,
  AccountingAddress$outboundSchema,
} from "./accountingaddress.js";
import {
  PhoneNumber,
  PhoneNumber$inboundSchema,
  PhoneNumber$Outbound,
  PhoneNumber$outboundSchema,
} from "./phonenumber.js";
import {
  SupplementalData,
  SupplementalData$inboundSchema,
  SupplementalData$Outbound,
  SupplementalData$outboundSchema,
} from "./supplementaldata.js";
import {
  WebLink,
  WebLink$inboundSchema,
  WebLink$Outbound,
  WebLink$outboundSchema,
} from "./weblink.js";

/**
 * Company info provides standard details about a linked company such as their address, phone number, and company registration.
 *
 * @remarks
 *
 * > **Company information or companies?**
 * >
 * > Company information is standard information that is held in the accounting software about a company. `Companies` is an endpoint that lists businesses in the Codat system that have linked and shared their data sources.
 */
export type AccountingCompanyInfo = {
  /**
   * Name of the linked company.
   */
  companyName?: string | null | undefined;
  /**
   * Identifier or reference for the company in the accounting software.
   */
  accountingPlatformRef?: string | null | undefined;
  /**
   * Registered legal name of the linked company.
   */
  companyLegalName?: string | null | undefined;
  /**
   * An array of Addresses.
   */
  addresses?: Array<AccountingAddress> | null | undefined;
  /**
   * An array of phone numbers.
   */
  phoneNumbers?: Array<PhoneNumber> | null | undefined;
  /**
   * An array of weblinks.
   */
  webLinks?: Array<WebLink> | null | undefined;
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
  ledgerLockDate?: string | undefined;
  /**
   * Registration number given to the linked company by the companies authority in the country of origin. In the UK this is Companies House.
   */
  registrationNumber?: string | null | undefined;
  /**
   * Company tax number.
   */
  taxNumber?: string | null | undefined;
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
  financialYearStartDate?: string | undefined;
  /**
   * Currency set in the accounting software of the linked company. Used by the currency rate.
   */
  baseCurrency?: string | null | undefined;
  /**
   * URL addresses for the accounting source.
   *
   * @remarks
   *
   * For example, for Xero integrations two URLs are returned. These have many potential use cases, such as [deep linking](https://developer.xero.com/documentation/api-guides/deep-link-xero).
   */
  sourceUrls?: { [k: string]: string } | null | undefined;
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
  createdDate?: string | undefined;
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
export const AccountingCompanyInfo$inboundSchema: z.ZodType<
  AccountingCompanyInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyName: z.nullable(z.string()).optional(),
  accountingPlatformRef: z.nullable(z.string()).optional(),
  companyLegalName: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(AccountingAddress$inboundSchema)).optional(),
  phoneNumbers: z.nullable(z.array(PhoneNumber$inboundSchema)).optional(),
  webLinks: z.nullable(z.array(WebLink$inboundSchema)).optional(),
  ledgerLockDate: z.string().optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  financialYearStartDate: z.string().optional(),
  baseCurrency: z.nullable(z.string()).optional(),
  sourceUrls: z.nullable(z.record(z.string())).optional(),
  createdDate: z.string().optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type AccountingCompanyInfo$Outbound = {
  companyName?: string | null | undefined;
  accountingPlatformRef?: string | null | undefined;
  companyLegalName?: string | null | undefined;
  addresses?: Array<AccountingAddress$Outbound> | null | undefined;
  phoneNumbers?: Array<PhoneNumber$Outbound> | null | undefined;
  webLinks?: Array<WebLink$Outbound> | null | undefined;
  ledgerLockDate?: string | undefined;
  registrationNumber?: string | null | undefined;
  taxNumber?: string | null | undefined;
  financialYearStartDate?: string | undefined;
  baseCurrency?: string | null | undefined;
  sourceUrls?: { [k: string]: string } | null | undefined;
  createdDate?: string | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const AccountingCompanyInfo$outboundSchema: z.ZodType<
  AccountingCompanyInfo$Outbound,
  z.ZodTypeDef,
  AccountingCompanyInfo
> = z.object({
  companyName: z.nullable(z.string()).optional(),
  accountingPlatformRef: z.nullable(z.string()).optional(),
  companyLegalName: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(AccountingAddress$outboundSchema)).optional(),
  phoneNumbers: z.nullable(z.array(PhoneNumber$outboundSchema)).optional(),
  webLinks: z.nullable(z.array(WebLink$outboundSchema)).optional(),
  ledgerLockDate: z.string().optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  financialYearStartDate: z.string().optional(),
  baseCurrency: z.nullable(z.string()).optional(),
  sourceUrls: z.nullable(z.record(z.string())).optional(),
  createdDate: z.string().optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCompanyInfo$ {
  /** @deprecated use `AccountingCompanyInfo$inboundSchema` instead. */
  export const inboundSchema = AccountingCompanyInfo$inboundSchema;
  /** @deprecated use `AccountingCompanyInfo$outboundSchema` instead. */
  export const outboundSchema = AccountingCompanyInfo$outboundSchema;
  /** @deprecated use `AccountingCompanyInfo$Outbound` instead. */
  export type Outbound = AccountingCompanyInfo$Outbound;
}

export function accountingCompanyInfoToJSON(
  accountingCompanyInfo: AccountingCompanyInfo,
): string {
  return JSON.stringify(
    AccountingCompanyInfo$outboundSchema.parse(accountingCompanyInfo),
  );
}

export function accountingCompanyInfoFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCompanyInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCompanyInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCompanyInfo' from JSON`,
  );
}
