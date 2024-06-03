/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FeatureState, FeatureState$ } from "./featurestate";
import { FeatureType, FeatureType$ } from "./featuretype";
import * as z from "zod";

export type SupportedFeature = {
    /**
     * The current release state of the feature.
     */
    featureState: FeatureState;
    /**
     * The type of feature.
     */
    featureType: FeatureType;
};

/** @internal */
export namespace SupportedFeature$ {
    export const inboundSchema: z.ZodType<SupportedFeature, z.ZodTypeDef, unknown> = z
        .object({
            featureState: FeatureState$.inboundSchema,
            featureType: FeatureType$.inboundSchema,
        })
        .transform((v) => {
            return {
                featureState: v.featureState,
                featureType: v.featureType,
            };
        });

    export type Outbound = {
        featureState: string;
        featureType: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupportedFeature> = z
        .object({
            featureState: FeatureState$.outboundSchema,
            featureType: FeatureType$.outboundSchema,
        })
        .transform((v) => {
            return {
                featureState: v.featureState,
                featureType: v.featureType,
            };
        });
}
