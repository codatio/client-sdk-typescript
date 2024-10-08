/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
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
import {
  SupplierStatus,
  SupplierStatus$inboundSchema,
  SupplierStatus$outboundSchema,
} from "./supplierstatus.js";

/**
 * > View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://docs.codat.io/sync-for-payables-api#/operations/list-suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill).
 */
export type Supplier = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * Identifier for the supplier, unique to the company in the accounting software.
   */
  id?: string | undefined;
  /**
   * Name of the supplier as recorded in the accounting system, typically the company name.
   */
  supplierName?: string | null | undefined;
  /**
   * Name of the main contact for the supplier.
   */
  contactName?: string | null | undefined;
  /**
   * Email address that the supplier may be contacted on.
   */
  emailAddress?: string | null | undefined;
  /**
   * Phone number that the supplier may be contacted on.
   */
  phone?: string | null | undefined;
  /**
   * An array of Addresses.
   */
  addresses?: Array<Address> | null | undefined;
  /**
   * Company number of the supplier. In the UK, this is typically the company registration number issued by Companies House.
   */
  registrationNumber?: string | null | undefined;
  /**
   * Supplier's company tax number.
   */
  taxNumber?: string | null | undefined;
  /**
   * Status of the supplier.
   */
  status: SupplierStatus;
  /**
   * Default currency the supplier's transactional data is recorded in.
   */
  defaultCurrency?: string | null | undefined;
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
export const Supplier$inboundSchema: z.ZodType<
  Supplier,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  supplierName: z.nullable(z.string()).optional(),
  contactName: z.nullable(z.string()).optional(),
  emailAddress: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(Address$inboundSchema)).optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  status: SupplierStatus$inboundSchema,
  defaultCurrency: z.nullable(z.string()).optional(),
  metadata: Metadata$inboundSchema.optional(),
  supplementalData: SupplementalData$inboundSchema.optional(),
});

/** @internal */
export type Supplier$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | undefined;
  supplierName?: string | null | undefined;
  contactName?: string | null | undefined;
  emailAddress?: string | null | undefined;
  phone?: string | null | undefined;
  addresses?: Array<Address$Outbound> | null | undefined;
  registrationNumber?: string | null | undefined;
  taxNumber?: string | null | undefined;
  status: string;
  defaultCurrency?: string | null | undefined;
  metadata?: Metadata$Outbound | undefined;
  supplementalData?: SupplementalData$Outbound | undefined;
};

/** @internal */
export const Supplier$outboundSchema: z.ZodType<
  Supplier$Outbound,
  z.ZodTypeDef,
  Supplier
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string().optional(),
  supplierName: z.nullable(z.string()).optional(),
  contactName: z.nullable(z.string()).optional(),
  emailAddress: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
  addresses: z.nullable(z.array(Address$outboundSchema)).optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  taxNumber: z.nullable(z.string()).optional(),
  status: SupplierStatus$outboundSchema,
  defaultCurrency: z.nullable(z.string()).optional(),
  metadata: Metadata$outboundSchema.optional(),
  supplementalData: SupplementalData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Supplier$ {
  /** @deprecated use `Supplier$inboundSchema` instead. */
  export const inboundSchema = Supplier$inboundSchema;
  /** @deprecated use `Supplier$outboundSchema` instead. */
  export const outboundSchema = Supplier$outboundSchema;
  /** @deprecated use `Supplier$Outbound` instead. */
  export type Outbound = Supplier$Outbound;
}
