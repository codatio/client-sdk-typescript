/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type ClientRateLimitResetWebhookData = {
    /**
     * Total number of requests remaining for your client.
     */
    quotaRemaining?: number | null | undefined;
    /**
     * The reason for your rate limit quota being reset.
     */
    resetReason?: string | undefined;
    /**
     * The number of available requests per day.
     */
    dailyQuota?: number | undefined;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    expiresUtc?: string | undefined;
};

/** @internal */
export namespace ClientRateLimitResetWebhookData$ {
    export const inboundSchema: z.ZodType<ClientRateLimitResetWebhookData, z.ZodTypeDef, unknown> =
        z
            .object({
                QuotaRemaining: z.nullable(z.number().int()).optional(),
                ResetReason: z.string().optional(),
                DailyQuota: z.number().int().optional(),
                ExpiresUtc: z.string().optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    QuotaRemaining: "quotaRemaining",
                    ResetReason: "resetReason",
                    DailyQuota: "dailyQuota",
                    ExpiresUtc: "expiresUtc",
                });
            });

    export type Outbound = {
        QuotaRemaining?: number | null | undefined;
        ResetReason?: string | undefined;
        DailyQuota?: number | undefined;
        ExpiresUtc?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ClientRateLimitResetWebhookData
    > = z
        .object({
            quotaRemaining: z.nullable(z.number().int()).optional(),
            resetReason: z.string().optional(),
            dailyQuota: z.number().int().optional(),
            expiresUtc: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                quotaRemaining: "QuotaRemaining",
                resetReason: "ResetReason",
                dailyQuota: "DailyQuota",
                expiresUtc: "ExpiresUtc",
            });
        });
}
