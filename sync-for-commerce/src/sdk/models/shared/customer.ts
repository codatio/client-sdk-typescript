/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Option, Option$ } from "./option";
import { z } from "zod";

export type Customer = {
    /**
     * List of customer options from the list of customer records on the accounting software.
     */
    customerOptions?: Array<Option> | null | undefined;
    /**
     * Selected customer id from the list of customer records on the accounting software.
     */
    selectedCustomerId?: string | null | undefined;
};

/** @internal */
export namespace Customer$ {
    export type Inbound = {
        customerOptions?: Array<Option$.Inbound> | null | undefined;
        selectedCustomerId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Customer, z.ZodTypeDef, Inbound> = z
        .object({
            customerOptions: z.nullable(z.array(Option$.inboundSchema)).optional(),
            selectedCustomerId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customerOptions === undefined
                    ? null
                    : { customerOptions: v.customerOptions }),
                ...(v.selectedCustomerId === undefined
                    ? null
                    : { selectedCustomerId: v.selectedCustomerId }),
            };
        });

    export type Outbound = {
        customerOptions?: Array<Option$.Outbound> | null | undefined;
        selectedCustomerId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Customer> = z
        .object({
            customerOptions: z.nullable(z.array(Option$.outboundSchema)).optional(),
            selectedCustomerId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customerOptions === undefined
                    ? null
                    : { customerOptions: v.customerOptions }),
                ...(v.selectedCustomerId === undefined
                    ? null
                    : { selectedCustomerId: v.selectedCustomerId }),
            };
        });
}
