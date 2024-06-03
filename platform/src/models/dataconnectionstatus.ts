/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../types";
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
export namespace DataConnectionStatus$ {
    export const inboundSchema = z.nativeEnum(DataConnectionStatus);
    export const outboundSchema = inboundSchema;
}
