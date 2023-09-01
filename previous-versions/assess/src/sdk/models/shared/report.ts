/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CommerceReportComponent } from "./commercereportcomponent";
import { CommerceReportDimension } from "./commercereportdimension";
import { CommerceReportError } from "./commercereporterror";
import { CommerceReportMeasure } from "./commercereportmeasure";
import { Expose, Type } from "class-transformer";

/**
 * ## Structure
 *
 * @remarks
 *
 * Assess reports follow a consistent structure. Reports contain four sections of information:
 *
 * ### 1. Report definition
 *
 * Information such as:
 *
 *   1. The report info (e.g. enhanced_profit_and_loss).
 *   2. The display name of the report (e.g. Enhanced Profit and Loss).
 *
 * ### 2. Dimension info
 *
 * Information about the dimension contained in the reports such as:
 *
 *   1. The type of dimension (e.g. datetime, recordRef).
 *   2. The display name of the dimension (e.g. Period, Category type, Category sub type).
 *   3. The details about each item within the dimension (e.g. displayName:"Jan 2022", start:"...", end:"...", id:"...", name:"...").
 *
 * ### 3. Measure info
 *
 * Information about the measures contained in the report such as:
 *
 *   1. The display name of the measure (e.g. value of account, percentage change).
 *   2. The type of the measure (e.g. currency, percentage).
 *   3. The unit of the measure (e.g. %, GBP).
 *
 * ### 4. The data for the report
 *
 * When the *includeDisplayName* parameter is set to *true*, it shows the *dimensionDisplayName* and *itemDisplayName* to make the data human-readable. The default setting for *includeDisplayName* is *false*.
 *
 *
 * ## Displaying the report
 *
 * Reports can be rendered as follows (ordering is implicit rather than explicit):
 *
 * ![A table showing an example of how a report can be rendered](https://files.readme.io/1fa20ca-Report1.png)
 *
 * # Data model
 *
 * ## Dimensions
 */
export class Report extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CommerceReportDimension })
    @Expose({ name: "dimensions" })
    @Type(() => CommerceReportDimension)
    dimensions?: CommerceReportDimension[];

    @SpeakeasyMetadata({ elemType: CommerceReportError })
    @Expose({ name: "errors" })
    @Type(() => CommerceReportError)
    errors?: CommerceReportError[];

    @SpeakeasyMetadata({ elemType: CommerceReportMeasure })
    @Expose({ name: "measures" })
    @Type(() => CommerceReportMeasure)
    measures?: CommerceReportMeasure[];

    @SpeakeasyMetadata({ elemType: CommerceReportComponent })
    @Expose({ name: "reportData" })
    @Type(() => CommerceReportComponent)
    reportData?: CommerceReportComponent[];

    @SpeakeasyMetadata()
    @Expose({ name: "reportInfo" })
    reportInfo?: Record<string, string>;
}
