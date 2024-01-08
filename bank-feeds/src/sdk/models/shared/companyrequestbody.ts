/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Items } from "./items";
import { Expose, Type } from "class-transformer";

export class CompanyRequestBody extends SpeakeasyBase {
    /**
     * Additional information about the company. This can be used to store foreign IDs, references, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Reference to the groups that the company is assigned to.
     */
    @SpeakeasyMetadata({ elemType: Items })
    @Expose({ name: "groups" })
    @Type(() => Items)
    groups?: Items[];

    /**
     * Name of company being connected.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
