/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import {
    PushOperationTimedOutWebhookData,
    PushOperationTimedOutWebhookData$,
} from "./pushoperationtimedoutwebhookdata.js";
import * as z from "zod";

/**
 * Webhook request body notifying that a push push operation has timed out.
 */
export type PushOperationTimedOutWebhook = {
    /**
     * Unique identifier for your client in Codat.
     */
    clientId?: string | undefined;
    /**
     * Name of your client in Codat.
     */
    clientName?: string | undefined;
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId?: string | undefined;
    /**
     * Unique identifier for a company's data connection.
     */
    dataConnectionId?: string | undefined;
    /**
     * Unique identifier for the rule.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    ruleId?: string | undefined;
    /**
     * The type of rule.
     */
    ruleType?: string | undefined;
    /**
     * Unique identifier of the webhook event.
     */
    alertId?: string | undefined;
    /**
     * A human-readable message about the webhook.
     */
    message?: string | undefined;
    data?: PushOperationTimedOutWebhookData | undefined;
};

/** @internal */
export namespace PushOperationTimedOutWebhook$ {
    export const inboundSchema: z.ZodType<PushOperationTimedOutWebhook, z.ZodTypeDef, unknown> = z
        .object({
            ClientId: z.string().optional(),
            ClientName: z.string().optional(),
            CompanyId: z.string().optional(),
            DataConnectionId: z.string().optional(),
            RuleId: z.string().optional(),
            RuleType: z.string().optional(),
            AlertId: z.string().optional(),
            Message: z.string().optional(),
            Data: PushOperationTimedOutWebhookData$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ClientId: "clientId",
                ClientName: "clientName",
                CompanyId: "companyId",
                DataConnectionId: "dataConnectionId",
                RuleId: "ruleId",
                RuleType: "ruleType",
                AlertId: "alertId",
                Message: "message",
                Data: "data",
            });
        });

    export type Outbound = {
        ClientId?: string | undefined;
        ClientName?: string | undefined;
        CompanyId?: string | undefined;
        DataConnectionId?: string | undefined;
        RuleId?: string | undefined;
        RuleType?: string | undefined;
        AlertId?: string | undefined;
        Message?: string | undefined;
        Data?: PushOperationTimedOutWebhookData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushOperationTimedOutWebhook> = z
        .object({
            clientId: z.string().optional(),
            clientName: z.string().optional(),
            companyId: z.string().optional(),
            dataConnectionId: z.string().optional(),
            ruleId: z.string().optional(),
            ruleType: z.string().optional(),
            alertId: z.string().optional(),
            message: z.string().optional(),
            data: PushOperationTimedOutWebhookData$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                clientId: "ClientId",
                clientName: "ClientName",
                companyId: "CompanyId",
                dataConnectionId: "DataConnectionId",
                ruleId: "RuleId",
                ruleType: "RuleType",
                alertId: "AlertId",
                message: "Message",
                data: "Data",
            });
        });
}
