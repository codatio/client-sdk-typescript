/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { Webhook, Webhook$ } from "./webhook";
import * as z from "zod";

export type CreateRuleResponse = Webhook | ErrorMessage;

/** @internal */
export namespace CreateRuleResponse$ {
    export const inboundSchema: z.ZodType<CreateRuleResponse, z.ZodTypeDef, unknown> = z.union([
        Webhook$.inboundSchema,
        ErrorMessage$.inboundSchema,
    ]);

    export type Outbound = Webhook$.Outbound | ErrorMessage$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRuleResponse> = z.union([
        Webhook$.outboundSchema,
        ErrorMessage$.outboundSchema,
    ]);
}
