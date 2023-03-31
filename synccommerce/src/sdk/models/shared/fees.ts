/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConfigAccount } from "./configaccount";
import { FeesSupplier } from "./feessupplier";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class Fees extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigAccount })
  @Expose({ name: "accounts" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, ConfigAccount> = {};
      for (const key in value) {
        obj[key] = plainToInstance(ConfigAccount, value[key] as ConfigAccount, {
          excludeExtraneousValues: true,
        });
      }
      return obj;
    },
    { toClassOnly: true }
  )
  accounts?: Record<string, ConfigAccount>;

  @SpeakeasyMetadata()
  @Expose({ name: "feesSupplier" })
  @Type(() => FeesSupplier)
  feesSupplier?: FeesSupplier;

  /**
   * Boolean indicator to enable syncing fees.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "syncFees" })
  syncFees?: boolean;
}
