/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The Codat API supports pulling and pushing of file attachments for invoices, bills, direct costs, and direct incomes.
 *
 * @remarks
 *
 * > **Retrieving attachments**
 * >
 * > If a company is authorized, you can query the Codat API to read, download, and upload attachments without requiring a fresh sync of data.
 *
 * Unlike other data types, Codat doesn't support [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings) for attachments.
 *
 * Note that different integrations have different requirements to file size and extension of attachments.
 *
 * | Integration       | File size | File extension                                                                                                                                               |
 * |-------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
 * | Xero              | 4 MB      | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF,   ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX,   ZIP |
 * | QuickBooks Online | 100 MB    | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF,   TXT, XLS, XLSX, XML                                                               |
 * | NetSuite          | 100 MB    | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF,   DOC, DOCX, ZIP                                                                      |
 * | Dynamics 365 Business Central          | 350 MB    | Dynamics do not explicitly outline which file types are supported but they do state <a className="external" href="https://learn.microsoft.com/en-gb/dynamics365/business-central/ui-how-add-link-to-record#to-attach-a-file-to-a-purchase-invoice" target="_blank">here</a> that "You can attach any type of file, such as text, image, or video files".                                                                   |
 *
 * View the coverage for each integration in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting" target="_blank">Data coverage explorer</a>.
 *
 */
export class Attachment extends SpeakeasyBase {
    /**
     * File type of the attachment. This is represented by appending the file type to the [IETF standard file naming requirements](https://tools.ietf.org/html/rfc6838). For example, for a jpeg file the output is **image/jpeg**.
     *
     * @remarks
     *
     * Supported file types vary per platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contentType" })
    contentType?: string;

    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dateCreated" })
    dateCreated?: string;

    /**
     * File size in bytes. For example, if this reads **46153**, then the file size is 46kb.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fileSize" })
    fileSize?: number;

    /**
     * Identifier for the attachment, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * If `true`, then the attachment is included with the associated invoice, bill or direct costs when it is printed, emailed, or sent to a customer, if the underlying accounting platform allows this.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "includeWhenSent" })
    includeWhenSent?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Name of the attachment file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;
}
