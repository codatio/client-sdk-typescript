/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ClientRateLimitResetWebhookData,
    ClientRateLimitResetWebhookData$,
} from "./clientratelimitresetwebhookdata";
import { z } from "zod";

/**
 * Webhook request body for a client that has had their rate limit reset.
 */
export type ClientRateLimitResetWebhook = {
    /**
     * Unique identifier of the webhook event.
     */
    alertId?: string | undefined;
    /**
     * Unique identifier for your client in Codat.
     */
    clientId?: string | undefined;
    /**
     * Name of your client in Codat.
     */
    clientName?: string | undefined;
    data?: ClientRateLimitResetWebhookData | undefined;
    /**
     * A human readable message about the webhook.
     */
    message?: string | undefined;
    /**
     * Unique identifier for the rule.
     */
    ruleId?: string | undefined;
    /**
     * The type of rule.
     */
    ruleType?: string | undefined;
};

/** @internal */
export namespace ClientRateLimitResetWebhook$ {
    export type Inbound = {
        AlertId?: string | undefined;
        ClientId?: string | undefined;
        ClientName?: string | undefined;
        Data?: ClientRateLimitResetWebhookData$.Inbound | undefined;
        Message?: string | undefined;
        RuleId?: string | undefined;
        RuleType?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ClientRateLimitResetWebhook, z.ZodTypeDef, Inbound> = z
        .object({
            AlertId: z.string().optional(),
            ClientId: z.string().optional(),
            ClientName: z.string().optional(),
            Data: ClientRateLimitResetWebhookData$.inboundSchema.optional(),
            Message: z.string().optional(),
            RuleId: z.string().optional(),
            RuleType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.AlertId === undefined ? null : { alertId: v.AlertId }),
                ...(v.ClientId === undefined ? null : { clientId: v.ClientId }),
                ...(v.ClientName === undefined ? null : { clientName: v.ClientName }),
                ...(v.Data === undefined ? null : { data: v.Data }),
                ...(v.Message === undefined ? null : { message: v.Message }),
                ...(v.RuleId === undefined ? null : { ruleId: v.RuleId }),
                ...(v.RuleType === undefined ? null : { ruleType: v.RuleType }),
            };
        });

    export type Outbound = {
        AlertId?: string | undefined;
        ClientId?: string | undefined;
        ClientName?: string | undefined;
        Data?: ClientRateLimitResetWebhookData$.Outbound | undefined;
        Message?: string | undefined;
        RuleId?: string | undefined;
        RuleType?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientRateLimitResetWebhook> = z
        .object({
            alertId: z.string().optional(),
            clientId: z.string().optional(),
            clientName: z.string().optional(),
            data: ClientRateLimitResetWebhookData$.outboundSchema.optional(),
            message: z.string().optional(),
            ruleId: z.string().optional(),
            ruleType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alertId === undefined ? null : { AlertId: v.alertId }),
                ...(v.clientId === undefined ? null : { ClientId: v.clientId }),
                ...(v.clientName === undefined ? null : { ClientName: v.clientName }),
                ...(v.data === undefined ? null : { Data: v.data }),
                ...(v.message === undefined ? null : { Message: v.message }),
                ...(v.ruleId === undefined ? null : { RuleId: v.ruleId }),
                ...(v.ruleType === undefined ? null : { RuleType: v.ruleType }),
            };
        });
}
