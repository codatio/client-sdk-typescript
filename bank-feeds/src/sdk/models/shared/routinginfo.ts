/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of routing number.
 */
export const Type = {
  Rtn: "rtn",
  Aba: "aba",
  Swift: "swift",
  Bsb: "bsb",
  Iban: "iban",
  Nz2: "nz2",
  Trno: "trno",
  Sortcode: "sortcode",
  Blz: "blz",
  Ifsc: "ifsc",
  Bankcode: "bankcode",
  Apca: "apca",
  Clabe: "clabe",
} as const;
/**
 * The type of routing number.
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * Routing information for the bank. This does not include account number.
 */
export type RoutingInfo = {
  /**
   * The numeric identifier of the routing number
   */
  bankCode?: string | null | undefined;
  /**
   * The type of routing number.
   */
  type?: Type | null | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const RoutingInfo$inboundSchema: z.ZodType<
  RoutingInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  bankCode: z.nullable(z.string()).optional(),
  type: z.nullable(Type$inboundSchema.default("bankcode")),
});

/** @internal */
export type RoutingInfo$Outbound = {
  bankCode?: string | null | undefined;
  type: string | null;
};

/** @internal */
export const RoutingInfo$outboundSchema: z.ZodType<
  RoutingInfo$Outbound,
  z.ZodTypeDef,
  RoutingInfo
> = z.object({
  bankCode: z.nullable(z.string()).optional(),
  type: z.nullable(Type$outboundSchema.default("bankcode")),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoutingInfo$ {
  /** @deprecated use `RoutingInfo$inboundSchema` instead. */
  export const inboundSchema = RoutingInfo$inboundSchema;
  /** @deprecated use `RoutingInfo$outboundSchema` instead. */
  export const outboundSchema = RoutingInfo$outboundSchema;
  /** @deprecated use `RoutingInfo$Outbound` instead. */
  export type Outbound = RoutingInfo$Outbound;
}
