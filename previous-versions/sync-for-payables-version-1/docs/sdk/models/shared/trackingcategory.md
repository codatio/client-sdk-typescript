# TrackingCategory

Details of a category used for tracking transactions.

> Language tip
>
> Parameters used to track types of spend in various parts of an organization can be called  **dimensions**, **projects**, **classes**, or **locations** in different accounting software. In Codat, we refer to these as tracking categories.

## Overview

Tracking categories are used to monitor cost centres and control budgets that sit outside the standard chart of accounts. Customers may use tracking categories to group together and track the income and costs of specific departments, projects, locations or customers.

From their accounting system, customers can: 

- Create and maintain tracking categories and tracking category types.
- View all tracking categories that are available for use.
- View the relationships between the categories.
- Assign invoices, bills, credit notes, or bill credit notes to one or more categories.
- View the categories that a transaction belongs to.
- View all transactions in a tracking category.

### Tracking categories per platform

Review the platform-specific tracking categories that Codat supports, and the level they are assigned to in the source platform. 

<table>
<thead>
  <tr>
    <th>Platform</th>
    <th>Tracking category</th>
    <th>Tracking level</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><b>Dynamics 365</b></td>
    <td>Dimensions</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td><b>Freshbooks</b></td>
    <td>Expense&nbsp;categories</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td><b>MYOB</b></td>
    <td>Categories</td>
    <td>Transaction</td>
  </tr>
  <tr>
    <td rowspan=4><b>Netsuite</b></td>
    <td>Classes</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td>Locations</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td>Departments</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td>Custom&nbsp;segments</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td rowspan=2><b>QuickBooks Desktop</b></td>
    <td>Classes</td>
    <td>Line item or transaction level</td>
  </tr>
  <tr>
    <td>Locations</td>
    <td>Transaction</td>
  </tr>
  <tr>
    <td rowspan=2><b>QuickBooks Online</b></td>
    <td>Classes</td>
    <td>Line item or transaction level</td>
  </tr>
  <tr>
    <td>Locations</td>
    <td>Transaction</td>
  </tr>
  <tr>
    <td rowspan=3><b>Sage 200</b></td>
    <td>Cost&nbsp;centers</td>
    <td>Line item</td>
  </tr>
  <tr>
      <td>Departments</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td>Analysis&nbsp;codes</td>
    <td>Transaction</td>
  </tr>
  <tr>
    <td rowspan=3><b>Sage 50</b></td>
    <td>Departments</td>
    <td>Line item</td>
  </tr>
  <tr>
     <td>Costcodes</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td>Projects</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td><b>Sage Intacct</b></td>
    <td>Dimensions</td>
    <td>Line item</td>
  </tr>
  <tr>
    <td><b>Xero</b></td>
    <td>Tracking&nbsp;categories</td>
    <td>Line item</td>
  </tr>
</tbody>
</table>

> **Example use case**
>
> Monitor the budget for your annual conference using a tracking category called 'AnnualConference2020' with the **type** set to **Costing**.

If a tracking category has a parent category, the ID of that parent category is displayed. There is also a `hasChildren` field that shows whether there are child subcategories nested beneath. 

## Example Usage

```typescript
import { TrackingCategory } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: TrackingCategory = {
  modifiedDate: "2022-10-23T00:00:00Z",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
  id: "string",
  name: "string",
  status: "Unknown",
  parentId: "string",
  hasChildren: true,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `modifiedDate`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | 2022-10-23T00:00:00Z                                                      |
| `sourceModifiedDate`                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | 2022-10-23T00:00:00Z                                                      |
| `id`                                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | The identifier for the item, unique per tracking category.                |                                                                           |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The name of the tracking category.                                        |                                                                           |
| `status`                                                                  | [shared.DefinitionStatus](../../../sdk/models/shared/definitionstatus.md) | :heavy_minus_sign:                                                        | Current state of the tracking category.                                   |                                                                           |
| `parentId`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | The identifier for this item's immediate parent.                          |                                                                           |
| `hasChildren`                                                             | *boolean*                                                                 | :heavy_minus_sign:                                                        | Boolean value indicating whether this category has SubCategories.         |                                                                           |
| `metadata`                                                                | [shared.Metadata](../../../sdk/models/shared/metadata.md)                 | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |