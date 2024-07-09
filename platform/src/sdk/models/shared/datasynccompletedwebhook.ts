/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    DataSyncCompletedWebhookData,
    DataSyncCompletedWebhookData$inboundSchema,
    DataSyncCompletedWebhookData$Outbound,
    DataSyncCompletedWebhookData$outboundSchema,
} from "./datasynccompletedwebhookdata.js";
import * as z from "zod";

/**
 * Webhook request body to notify the completion of a data sync.
 */
export type DataSyncCompletedWebhook = {
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
    data?: DataSyncCompletedWebhookData | undefined;
};

/** @internal */
export const DataSyncCompletedWebhook$inboundSchema: z.ZodType<
    DataSyncCompletedWebhook,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ClientId: z.string().optional(),
        ClientName: z.string().optional(),
        CompanyId: z.string().optional(),
        DataConnectionId: z.string().optional(),
        RuleId: z.string().optional(),
        RuleType: z.string().optional(),
        AlertId: z.string().optional(),
        Message: z.string().optional(),
        Data: DataSyncCompletedWebhookData$inboundSchema.optional(),
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

/** @internal */
export type DataSyncCompletedWebhook$Outbound = {
    ClientId?: string | undefined;
    ClientName?: string | undefined;
    CompanyId?: string | undefined;
    DataConnectionId?: string | undefined;
    RuleId?: string | undefined;
    RuleType?: string | undefined;
    AlertId?: string | undefined;
    Message?: string | undefined;
    Data?: DataSyncCompletedWebhookData$Outbound | undefined;
};

/** @internal */
export const DataSyncCompletedWebhook$outboundSchema: z.ZodType<
    DataSyncCompletedWebhook$Outbound,
    z.ZodTypeDef,
    DataSyncCompletedWebhook
> = z
    .object({
        clientId: z.string().optional(),
        clientName: z.string().optional(),
        companyId: z.string().optional(),
        dataConnectionId: z.string().optional(),
        ruleId: z.string().optional(),
        ruleType: z.string().optional(),
        alertId: z.string().optional(),
        message: z.string().optional(),
        data: DataSyncCompletedWebhookData$outboundSchema.optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSyncCompletedWebhook$ {
    /** @deprecated use `DataSyncCompletedWebhook$inboundSchema` instead. */
    export const inboundSchema = DataSyncCompletedWebhook$inboundSchema;
    /** @deprecated use `DataSyncCompletedWebhook$outboundSchema` instead. */
    export const outboundSchema = DataSyncCompletedWebhook$outboundSchema;
    /** @deprecated use `DataSyncCompletedWebhook$Outbound` instead. */
    export type Outbound = DataSyncCompletedWebhook$Outbound;
}
