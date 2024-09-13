# JournalLine

## Example Usage

```typescript
import { JournalLine } from "@codat/sync-for-payables-version-1/sdk/models/shared";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

let value: JournalLine = {
  netAmount: new Decimal("4438.79"),
  tracking: {
    recordRefs: [
      {
        dataType: "trackingCategories",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                         | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Description of the journal line item.                                                                                                                 |
| `netAmount`                                                                                                                                           | *Decimal*                                                                                                                                             | :heavy_check_mark:                                                                                                                                    | Amount for the journal line. Debit entries are considered positive, and credit entries are considered negative.                                       |
| `currency`                                                                                                                                            | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Currency for the journal line item.                                                                                                                   |
| `accountRef`                                                                                                                                          | [shared.AccountRef](../../../sdk/models/shared/accountref.md)                                                                                         | :heavy_minus_sign:                                                                                                                                    | Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account. |
| `tracking`                                                                                                                                            | [shared.JournalLineTracking](../../../sdk/models/shared/journallinetracking.md)                                                                       | :heavy_minus_sign:                                                                                                                                    | List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)                               |
| `contactRef`                                                                                                                                          | [shared.ContactReference](../../../sdk/models/shared/contactreference.md)                                                                             | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |