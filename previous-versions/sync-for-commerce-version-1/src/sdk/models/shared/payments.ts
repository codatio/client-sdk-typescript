/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConfigAccount } from "./configaccount";
import { Expose, Transform } from "class-transformer";

export class Payments extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ConfigAccount })
    @Expose({ name: "accounts" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ConfigAccount> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ConfigAccount);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    accounts?: Record<string, ConfigAccount>;

    /**
     * Boolean indicator for syncing sales.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "syncPayments" })
    syncPayments?: boolean;
}
