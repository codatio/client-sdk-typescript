/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WebhookNotifier, WebhookNotifier$ } from "./webhooknotifier.js";
import * as z from "zod";

/**
 * Create a message that notifies a URL of an event based on its given type or condition.
 */
export type CreateRule = {
    /**
     * The type of webhook.
     */
    type: string;
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId?: string | undefined;
    notifiers: WebhookNotifier;
};

/** @internal */
export namespace CreateRule$ {
    export const inboundSchema: z.ZodType<CreateRule, z.ZodTypeDef, unknown> = z.object({
        type: z.string(),
        companyId: z.string().optional(),
        notifiers: WebhookNotifier$.inboundSchema,
    });

    export type Outbound = {
        type: string;
        companyId?: string | undefined;
        notifiers: WebhookNotifier$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRule> = z.object({
        type: z.string(),
        companyId: z.string().optional(),
        notifiers: WebhookNotifier$.outboundSchema,
    });
}
