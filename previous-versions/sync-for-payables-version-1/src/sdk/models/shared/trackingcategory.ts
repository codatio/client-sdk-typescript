/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DefinitionStatus,
  DefinitionStatus$inboundSchema,
  DefinitionStatus$outboundSchema,
} from "./definitionstatus.js";
import {
  Metadata,
  Metadata$inboundSchema,
  Metadata$Outbound,
  Metadata$outboundSchema,
} from "./metadata.js";

/**
 * Details of a category used for tracking transactions.
 *
 * @remarks
 *
 * > Language tip
 * >
 * > Parameters used to track types of spend in various parts of an organization can be called  **dimensions**, **projects**, **classes**, or **locations** in different accounting software. In Codat, we refer to these as tracking categories.
 *
 * View the coverage for tracking categories in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=trackingCategories" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Tracking categories are used to monitor cost centres and control budgets that sit outside the standard chart of accounts. Customers may use tracking categories to group together and track the income and costs of specific departments, projects, locations or customers.
 *
 * From their accounting system, customers can:
 *
 * - Create and maintain tracking categories and tracking category types.
 * - View all tracking categories that are available for use.
 * - View the relationships between the categories.
 * - Assign invoices, bills, credit notes, or bill credit notes to one or more categories.
 * - View the categories that a transaction belongs to.
 * - View all transactions in a tracking category.
 *
 * ### Tracking categories per platform
 *
 * Review the platform-specific tracking categories that Codat supports, and the level they are assigned to in the source platform.
 *
 * <table>
 * <thead>
 *   <tr>
 *     <th>Platform</th>
 *     <th>Tracking category</th>
 *     <th>Tracking level</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td><b>Dynamics 365</b></td>
 *     <td>Dimensions</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td><b>Freshbooks</b></td>
 *     <td>Expense&nbsp;categories</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td><b>MYOB</b></td>
 *     <td>Categories</td>
 *     <td>Transaction</td>
 *   </tr>
 *   <tr>
 *     <td rowspan=4><b>Netsuite</b></td>
 *     <td>Classes</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td>Locations</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td>Departments</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td>Custom&nbsp;segments</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td rowspan=2><b>QuickBooks Desktop</b></td>
 *     <td>Classes</td>
 *     <td>Line item or transaction level</td>
 *   </tr>
 *   <tr>
 *     <td>Locations</td>
 *     <td>Transaction</td>
 *   </tr>
 *   <tr>
 *     <td rowspan=2><b>QuickBooks Online</b></td>
 *     <td>Classes</td>
 *     <td>Line item or transaction level</td>
 *   </tr>
 *   <tr>
 *     <td>Locations</td>
 *     <td>Transaction</td>
 *   </tr>
 *   <tr>
 *     <td rowspan=3><b>Sage 200</b></td>
 *     <td>Cost&nbsp;centers</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *       <td>Departments</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td>Analysis&nbsp;codes</td>
 *     <td>Transaction</td>
 *   </tr>
 *   <tr>
 *     <td rowspan=3><b>Sage 50</b></td>
 *     <td>Departments</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *      <td>Costcodes</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td>Projects</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td><b>Sage Intacct</b></td>
 *     <td>Dimensions</td>
 *     <td>Line item</td>
 *   </tr>
 *   <tr>
 *     <td><b>Xero</b></td>
 *     <td>Tracking&nbsp;categories</td>
 *     <td>Line item</td>
 *   </tr>
 * </tbody>
 * </table>
 *
 * > **Example use case**
 * >
 * > Monitor the budget for your annual conference using a tracking category called 'AnnualConference2020' with the **type** set to **Costing**.
 *
 * If a tracking category has a parent category, the ID of that parent category is displayed. There is also a `hasChildren` field that shows whether there are child subcategories nested beneath.
 */
export type TrackingCategory = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * The identifier for the item, unique per tracking category.
   */
  id?: string | null | undefined;
  /**
   * The name of the tracking category.
   */
  name?: string | null | undefined;
  /**
   * Current state of the tracking category.
   */
  status?: DefinitionStatus | undefined;
  /**
   * The identifier for this item's immediate parent.
   */
  parentId?: string | null | undefined;
  /**
   * Boolean value indicating whether this category has SubCategories.
   */
  hasChildren?: boolean | undefined;
  metadata?: Metadata | undefined;
};

/** @internal */
export const TrackingCategory$inboundSchema: z.ZodType<
  TrackingCategory,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DefinitionStatus$inboundSchema.optional(),
  parentId: z.nullable(z.string()).optional(),
  hasChildren: z.boolean().optional(),
  metadata: Metadata$inboundSchema.optional(),
});

/** @internal */
export type TrackingCategory$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | undefined;
  parentId?: string | null | undefined;
  hasChildren?: boolean | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const TrackingCategory$outboundSchema: z.ZodType<
  TrackingCategory$Outbound,
  z.ZodTypeDef,
  TrackingCategory
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DefinitionStatus$outboundSchema.optional(),
  parentId: z.nullable(z.string()).optional(),
  hasChildren: z.boolean().optional(),
  metadata: Metadata$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingCategory$ {
  /** @deprecated use `TrackingCategory$inboundSchema` instead. */
  export const inboundSchema = TrackingCategory$inboundSchema;
  /** @deprecated use `TrackingCategory$outboundSchema` instead. */
  export const outboundSchema = TrackingCategory$outboundSchema;
  /** @deprecated use `TrackingCategory$Outbound` instead. */
  export type Outbound = TrackingCategory$Outbound;
}