/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DataType, DataType$ } from "./datatype.js";
import * as z from "zod";

export type GetCreateUpdateModelOptionsByDataTypeRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * The key of a Codat data type
     */
    dataType: DataType;
};

/** @internal */
export namespace GetCreateUpdateModelOptionsByDataTypeRequest$ {
    export const inboundSchema: z.ZodType<
        GetCreateUpdateModelOptionsByDataTypeRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        companyId: z.string(),
        connectionId: z.string(),
        dataType: DataType$.inboundSchema,
    });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        dataType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCreateUpdateModelOptionsByDataTypeRequest
    > = z.object({
        companyId: z.string(),
        connectionId: z.string(),
        dataType: DataType$.outboundSchema,
    });
}
