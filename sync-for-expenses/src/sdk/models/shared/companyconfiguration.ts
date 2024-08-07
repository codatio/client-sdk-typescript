/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    BankAccount,
    BankAccount$inboundSchema,
    BankAccount$Outbound,
    BankAccount$outboundSchema,
} from "./bankaccount.js";
import {
    CustomerDetails,
    CustomerDetails$inboundSchema,
    CustomerDetails$Outbound,
    CustomerDetails$outboundSchema,
} from "./customerdetails.js";
import {
    SupplierDetails,
    SupplierDetails$inboundSchema,
    SupplierDetails$Outbound,
    SupplierDetails$outboundSchema,
} from "./supplierdetails.js";
import * as z from "zod";

export type CompanyConfiguration = {
    bankAccount: BankAccount;
    supplier: SupplierDetails;
    customer: CustomerDetails;
};

/** @internal */
export const CompanyConfiguration$inboundSchema: z.ZodType<
    CompanyConfiguration,
    z.ZodTypeDef,
    unknown
> = z.object({
    bankAccount: BankAccount$inboundSchema,
    supplier: SupplierDetails$inboundSchema,
    customer: CustomerDetails$inboundSchema,
});

/** @internal */
export type CompanyConfiguration$Outbound = {
    bankAccount: BankAccount$Outbound;
    supplier: SupplierDetails$Outbound;
    customer: CustomerDetails$Outbound;
};

/** @internal */
export const CompanyConfiguration$outboundSchema: z.ZodType<
    CompanyConfiguration$Outbound,
    z.ZodTypeDef,
    CompanyConfiguration
> = z.object({
    bankAccount: BankAccount$outboundSchema,
    supplier: SupplierDetails$outboundSchema,
    customer: CustomerDetails$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyConfiguration$ {
    /** @deprecated use `CompanyConfiguration$inboundSchema` instead. */
    export const inboundSchema = CompanyConfiguration$inboundSchema;
    /** @deprecated use `CompanyConfiguration$outboundSchema` instead. */
    export const outboundSchema = CompanyConfiguration$outboundSchema;
    /** @deprecated use `CompanyConfiguration$Outbound` instead. */
    export type Outbound = CompanyConfiguration$Outbound;
}
