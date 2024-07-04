/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ApiKeyDetails, ApiKeyDetails$ } from "./apikeydetails.js";
import * as z from "zod";

export type ApiKeys = {
    results?: Array<ApiKeyDetails> | undefined;
};

/** @internal */
export namespace ApiKeys$ {
    export const inboundSchema: z.ZodType<ApiKeys, z.ZodTypeDef, unknown> = z.object({
        results: z.array(ApiKeyDetails$.inboundSchema).optional(),
    });

    export type Outbound = {
        results?: Array<ApiKeyDetails$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApiKeys> = z.object({
        results: z.array(ApiKeyDetails$.outboundSchema).optional(),
    });
}
