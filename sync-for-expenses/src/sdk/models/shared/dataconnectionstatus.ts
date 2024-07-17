/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The current authorization status of the data connection.
 */
export const DataConnectionStatus = {
    PendingAuth: "PendingAuth",
    Linked: "Linked",
    Unlinked: "Unlinked",
    Deauthorized: "Deauthorized",
} as const;
/**
 * The current authorization status of the data connection.
 */
export type DataConnectionStatus = ClosedEnum<typeof DataConnectionStatus>;

/** @internal */
export const DataConnectionStatus$inboundSchema: z.ZodNativeEnum<typeof DataConnectionStatus> =
    z.nativeEnum(DataConnectionStatus);

/** @internal */
export const DataConnectionStatus$outboundSchema: z.ZodNativeEnum<typeof DataConnectionStatus> =
    DataConnectionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataConnectionStatus$ {
    /** @deprecated use `DataConnectionStatus$inboundSchema` instead. */
    export const inboundSchema = DataConnectionStatus$inboundSchema;
    /** @deprecated use `DataConnectionStatus$outboundSchema` instead. */
    export const outboundSchema = DataConnectionStatus$outboundSchema;
}
