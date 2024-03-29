/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The current release state of the feature.
 */
export enum FeatureState {
    Release = "Release",
    Alpha = "Alpha",
    Beta = "Beta",
    Deprecated = "Deprecated",
    NotSupported = "NotSupported",
    NotImplemented = "NotImplemented",
}

/** @internal */
export const FeatureState$ = z.nativeEnum(FeatureState);
