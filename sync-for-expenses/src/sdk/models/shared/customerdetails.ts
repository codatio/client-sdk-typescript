/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CustomerDetails = {
    /**
     * Identifier for the customer, unique to the company in the accounting platform.
     */
    id?: string | undefined;
};

/** @internal */
export const CustomerDetails$inboundSchema: z.ZodType<CustomerDetails, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string().optional(),
    });

/** @internal */
export type CustomerDetails$Outbound = {
    id?: string | undefined;
};

/** @internal */
export const CustomerDetails$outboundSchema: z.ZodType<
    CustomerDetails$Outbound,
    z.ZodTypeDef,
    CustomerDetails
> = z.object({
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerDetails$ {
    /** @deprecated use `CustomerDetails$inboundSchema` instead. */
    export const inboundSchema = CustomerDetails$inboundSchema;
    /** @deprecated use `CustomerDetails$outboundSchema` instead. */
    export const outboundSchema = CustomerDetails$outboundSchema;
    /** @deprecated use `CustomerDetails$Outbound` instead. */
    export type Outbound = CustomerDetails$Outbound;
}
