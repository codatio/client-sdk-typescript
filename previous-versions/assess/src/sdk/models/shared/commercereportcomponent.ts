/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReportComponentMeasure } from "./reportcomponentmeasure";
import { Expose, Type } from "class-transformer";

export class CommerceReportComponent extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CommerceReportComponent })
    @Expose({ name: "components" })
    @Type(() => CommerceReportComponent)
    components?: CommerceReportComponent[];

    @SpeakeasyMetadata()
    @Expose({ name: "dimension" })
    dimension?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "dimensionDisplayName" })
    dimensionDisplayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item" })
    item?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "itemDisplayName" })
    itemDisplayName?: string;

    @SpeakeasyMetadata({ elemType: ReportComponentMeasure })
    @Expose({ name: "measures" })
    @Type(() => ReportComponentMeasure)
    measures?: ReportComponentMeasure[];
}