/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    DataSyncCompletedWebhookData,
    DataSyncCompletedWebhookData$,
} from "./datasynccompletedwebhookdata";
import * as z from "zod";

/**
 * Webhook request body to notify the completion of a data sync.
 */
export type DataSyncCompletedWebhook = {
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
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId?: string | undefined;
    data?: DataSyncCompletedWebhookData | undefined;
    /**
     * Unique identifier for a company's data connection.
     */
    dataConnectionId?: string | undefined;
    /**
     * A human-readable message about the webhook.
     */
    message?: string | undefined;
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
};

/** @internal */
export namespace DataSyncCompletedWebhook$ {
    export const inboundSchema: z.ZodType<DataSyncCompletedWebhook, z.ZodTypeDef, unknown> = z
        .object({
            AlertId: z.string().optional(),
            ClientId: z.string().optional(),
            ClientName: z.string().optional(),
            CompanyId: z.string().optional(),
            Data: DataSyncCompletedWebhookData$.inboundSchema.optional(),
            DataConnectionId: z.string().optional(),
            Message: z.string().optional(),
            RuleId: z.string().optional(),
            RuleType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.AlertId === undefined ? null : { alertId: v.AlertId }),
                ...(v.ClientId === undefined ? null : { clientId: v.ClientId }),
                ...(v.ClientName === undefined ? null : { clientName: v.ClientName }),
                ...(v.CompanyId === undefined ? null : { companyId: v.CompanyId }),
                ...(v.Data === undefined ? null : { data: v.Data }),
                ...(v.DataConnectionId === undefined
                    ? null
                    : { dataConnectionId: v.DataConnectionId }),
                ...(v.Message === undefined ? null : { message: v.Message }),
                ...(v.RuleId === undefined ? null : { ruleId: v.RuleId }),
                ...(v.RuleType === undefined ? null : { ruleType: v.RuleType }),
            };
        });

    export type Outbound = {
        AlertId?: string | undefined;
        ClientId?: string | undefined;
        ClientName?: string | undefined;
        CompanyId?: string | undefined;
        Data?: DataSyncCompletedWebhookData$.Outbound | undefined;
        DataConnectionId?: string | undefined;
        Message?: string | undefined;
        RuleId?: string | undefined;
        RuleType?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DataSyncCompletedWebhook> = z
        .object({
            alertId: z.string().optional(),
            clientId: z.string().optional(),
            clientName: z.string().optional(),
            companyId: z.string().optional(),
            data: DataSyncCompletedWebhookData$.outboundSchema.optional(),
            dataConnectionId: z.string().optional(),
            message: z.string().optional(),
            ruleId: z.string().optional(),
            ruleType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alertId === undefined ? null : { AlertId: v.alertId }),
                ...(v.clientId === undefined ? null : { ClientId: v.clientId }),
                ...(v.clientName === undefined ? null : { ClientName: v.clientName }),
                ...(v.companyId === undefined ? null : { CompanyId: v.companyId }),
                ...(v.data === undefined ? null : { Data: v.data }),
                ...(v.dataConnectionId === undefined
                    ? null
                    : { DataConnectionId: v.dataConnectionId }),
                ...(v.message === undefined ? null : { Message: v.message }),
                ...(v.ruleId === undefined ? null : { RuleId: v.ruleId }),
                ...(v.ruleType === undefined ? null : { RuleType: v.ruleType }),
            };
        });
}
