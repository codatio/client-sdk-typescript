/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DataTypeFeature, DataTypeFeature$ } from "./datatypefeature";
import { SourceType, SourceType$ } from "./sourcetype";
import { z } from "zod";

/**
 * An integration that Codat supports
 */
export type Integration = {
    /**
     * The name of the data provider.
     */
    dataProvidedBy?: string | undefined;
    datatypeFeatures?: Array<DataTypeFeature> | undefined;
    /**
     * Whether this integration is enabled for your customers to use.
     */
    enabled: boolean;
    /**
     * A Codat ID representing the integration.
     */
    integrationId?: string | undefined;
    /**
     * `True` if the integration is currently in beta release.
     */
    isBeta?: boolean | undefined;
    /**
     * `True` if the integration is to an application installed and run locally on an SMBs computer.
     */
    isOfflineConnector?: boolean | undefined;
    /**
     * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.
     */
    key: string;
    /**
     * Static url for integration's logo.
     */
    logoUrl: string;
    /**
     * Name of integration.
     */
    name: string;
    /**
     * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
     */
    sourceId?: string | undefined;
    /**
     * The type of platform of the connection.
     */
    sourceType?: SourceType | undefined;
};

/** @internal */
export namespace Integration$ {
    export type Inbound = {
        dataProvidedBy?: string | undefined;
        datatypeFeatures?: Array<DataTypeFeature$.Inbound> | undefined;
        enabled: boolean;
        integrationId?: string | undefined;
        isBeta?: boolean | undefined;
        isOfflineConnector?: boolean | undefined;
        key: string;
        logoUrl: string;
        name: string;
        sourceId?: string | undefined;
        sourceType?: SourceType | undefined;
    };

    export const inboundSchema: z.ZodType<Integration, z.ZodTypeDef, Inbound> = z
        .object({
            dataProvidedBy: z.string().optional(),
            datatypeFeatures: z.array(DataTypeFeature$.inboundSchema).optional(),
            enabled: z.boolean(),
            integrationId: z.string().optional(),
            isBeta: z.boolean().optional(),
            isOfflineConnector: z.boolean().optional(),
            key: z.string(),
            logoUrl: z.string(),
            name: z.string(),
            sourceId: z.string().optional(),
            sourceType: SourceType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataProvidedBy === undefined ? null : { dataProvidedBy: v.dataProvidedBy }),
                ...(v.datatypeFeatures === undefined
                    ? null
                    : { datatypeFeatures: v.datatypeFeatures }),
                enabled: v.enabled,
                ...(v.integrationId === undefined ? null : { integrationId: v.integrationId }),
                ...(v.isBeta === undefined ? null : { isBeta: v.isBeta }),
                ...(v.isOfflineConnector === undefined
                    ? null
                    : { isOfflineConnector: v.isOfflineConnector }),
                key: v.key,
                logoUrl: v.logoUrl,
                name: v.name,
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                ...(v.sourceType === undefined ? null : { sourceType: v.sourceType }),
            };
        });

    export type Outbound = {
        dataProvidedBy?: string | undefined;
        datatypeFeatures?: Array<DataTypeFeature$.Outbound> | undefined;
        enabled: boolean;
        integrationId?: string | undefined;
        isBeta?: boolean | undefined;
        isOfflineConnector?: boolean | undefined;
        key: string;
        logoUrl: string;
        name: string;
        sourceId?: string | undefined;
        sourceType?: SourceType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Integration> = z
        .object({
            dataProvidedBy: z.string().optional(),
            datatypeFeatures: z.array(DataTypeFeature$.outboundSchema).optional(),
            enabled: z.boolean(),
            integrationId: z.string().optional(),
            isBeta: z.boolean().optional(),
            isOfflineConnector: z.boolean().optional(),
            key: z.string(),
            logoUrl: z.string(),
            name: z.string(),
            sourceId: z.string().optional(),
            sourceType: SourceType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataProvidedBy === undefined ? null : { dataProvidedBy: v.dataProvidedBy }),
                ...(v.datatypeFeatures === undefined
                    ? null
                    : { datatypeFeatures: v.datatypeFeatures }),
                enabled: v.enabled,
                ...(v.integrationId === undefined ? null : { integrationId: v.integrationId }),
                ...(v.isBeta === undefined ? null : { isBeta: v.isBeta }),
                ...(v.isOfflineConnector === undefined
                    ? null
                    : { isOfflineConnector: v.isOfflineConnector }),
                key: v.key,
                logoUrl: v.logoUrl,
                name: v.name,
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                ...(v.sourceType === undefined ? null : { sourceType: v.sourceType }),
            };
        });
}
