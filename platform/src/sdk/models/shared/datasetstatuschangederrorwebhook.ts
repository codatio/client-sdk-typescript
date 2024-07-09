/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    DatasetStatusChangedErrorWebhookData,
    DatasetStatusChangedErrorWebhookData$inboundSchema,
    DatasetStatusChangedErrorWebhookData$Outbound,
    DatasetStatusChangedErrorWebhookData$outboundSchema,
} from "./datasetstatuschangederrorwebhookdata.js";
import * as z from "zod";

/**
 * Webhook request body to notify that a data synchronization has completed.
 */
export type DatasetStatusChangedErrorWebhook = {
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
    data?: DatasetStatusChangedErrorWebhookData | undefined;
};

/** @internal */
export const DatasetStatusChangedErrorWebhook$inboundSchema: z.ZodType<
    DatasetStatusChangedErrorWebhook,
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
        Data: DatasetStatusChangedErrorWebhookData$inboundSchema.optional(),
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
export type DatasetStatusChangedErrorWebhook$Outbound = {
    ClientId?: string | undefined;
    ClientName?: string | undefined;
    CompanyId?: string | undefined;
    DataConnectionId?: string | undefined;
    RuleId?: string | undefined;
    RuleType?: string | undefined;
    AlertId?: string | undefined;
    Message?: string | undefined;
    Data?: DatasetStatusChangedErrorWebhookData$Outbound | undefined;
};

/** @internal */
export const DatasetStatusChangedErrorWebhook$outboundSchema: z.ZodType<
    DatasetStatusChangedErrorWebhook$Outbound,
    z.ZodTypeDef,
    DatasetStatusChangedErrorWebhook
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
        data: DatasetStatusChangedErrorWebhookData$outboundSchema.optional(),
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
export namespace DatasetStatusChangedErrorWebhook$ {
    /** @deprecated use `DatasetStatusChangedErrorWebhook$inboundSchema` instead. */
    export const inboundSchema = DatasetStatusChangedErrorWebhook$inboundSchema;
    /** @deprecated use `DatasetStatusChangedErrorWebhook$outboundSchema` instead. */
    export const outboundSchema = DatasetStatusChangedErrorWebhook$outboundSchema;
    /** @deprecated use `DatasetStatusChangedErrorWebhook$Outbound` instead. */
    export type Outbound = DatasetStatusChangedErrorWebhook$Outbound;
}
