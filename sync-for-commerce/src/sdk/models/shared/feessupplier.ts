/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Option, Option$ } from "./option";
import { z } from "zod";

export type FeesSupplier = {
    /**
     * Selected supplier id from the list of supplier records on the accounting software.
     */
    selectedSupplierId?: string | null | undefined;
    /**
     * List of supplier options from the list of supplier records on the accounting software.
     */
    supplierOptions?: Array<Option> | null | undefined;
};

/** @internal */
export namespace FeesSupplier$ {
    export type Inbound = {
        selectedSupplierId?: string | null | undefined;
        supplierOptions?: Array<Option$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<FeesSupplier, z.ZodTypeDef, Inbound> = z
        .object({
            selectedSupplierId: z.nullable(z.string()).optional(),
            supplierOptions: z.nullable(z.array(Option$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.selectedSupplierId === undefined
                    ? null
                    : { selectedSupplierId: v.selectedSupplierId }),
                ...(v.supplierOptions === undefined
                    ? null
                    : { supplierOptions: v.supplierOptions }),
            };
        });

    export type Outbound = {
        selectedSupplierId?: string | null | undefined;
        supplierOptions?: Array<Option$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FeesSupplier> = z
        .object({
            selectedSupplierId: z.nullable(z.string()).optional(),
            supplierOptions: z.nullable(z.array(Option$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.selectedSupplierId === undefined
                    ? null
                    : { selectedSupplierId: v.selectedSupplierId }),
                ...(v.supplierOptions === undefined
                    ? null
                    : { supplierOptions: v.supplierOptions }),
            };
        });
}
