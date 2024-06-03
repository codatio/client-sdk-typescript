/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WebhookNotifier, WebhookNotifier$ } from "./webhooknotifier";
import * as z from "zod";

/**
 * Configuration to provide an event notification to a URL or list of email addresses based on the given type or condition.
 */
export type Webhook = {
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId?: string | undefined;
    /**
     * Unique identifier for the configured notification.
     */
    id?: string | undefined;
    notifiers: WebhookNotifier;
    /**
     * The type of webhook.
     */
    type: string;
};

/** @internal */
export namespace Webhook$ {
    export const inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown> = z
        .object({
            companyId: z.string().optional(),
            id: z.string().optional(),
            notifiers: WebhookNotifier$.inboundSchema,
            type: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.companyId === undefined ? null : { companyId: v.companyId }),
                ...(v.id === undefined ? null : { id: v.id }),
                notifiers: v.notifiers,
                type: v.type,
            };
        });

    export type Outbound = {
        companyId?: string | undefined;
        id?: string | undefined;
        notifiers: WebhookNotifier$.Outbound;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Webhook> = z
        .object({
            companyId: z.string().optional(),
            id: z.string().optional(),
            notifiers: WebhookNotifier$.outboundSchema,
            type: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.companyId === undefined ? null : { companyId: v.companyId }),
                ...(v.id === undefined ? null : { id: v.id }),
                notifiers: v.notifiers,
                type: v.type,
            };
        });
}
