/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PushOptionChoice } from "./pushoptionchoice";
import { PushOptionType } from "./pushoptiontype";
import { Expose, Transform, Type } from "class-transformer";

export class PushOptionProperty extends SpeakeasyBase {
    /**
     * A description of the property.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The property's display name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName: string;

    @SpeakeasyMetadata({ elemType: PushOptionChoice })
    @Expose({ name: "options" })
    @Type(() => PushOptionChoice)
    options?: PushOptionChoice[];

    @SpeakeasyMetadata({ elemType: PushOptionProperty })
    @Expose({ name: "properties" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, PushOptionProperty> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], PushOptionProperty);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    properties?: Record<string, PushOptionProperty>;

    /**
     * The property is required if `True`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "required" })
    required: boolean;

    /**
     * The option type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PushOptionType;

    @SpeakeasyMetadata()
    @Expose({ name: "validation" })
    validation?: Record<string, any>;
}
