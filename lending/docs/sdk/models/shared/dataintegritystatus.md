# DataIntegrityStatus

## Example Usage

```typescript
import { DataIntegrityStatus } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: DataIntegrityStatus = {
  type: "string",
  statusInfo: {
    lastMatched: "2021-10-24T14:15:22Z",
    currentStatus: "Unknown",
    statusMessage: "string",
  },
  connectionIds: {
    source: [
      "d5a8d1b2-b38a-4e44-8641-548ad43be6bb",
      "da8c9f39-8af9-4a98-964b-f1e207942837",
    ],
    target: [
      "3d7ce25a-c107-44bc-8e0c-36c10bdd14e0",
      "a5300eac-01fa-4a77-b5b0-ea0b86a3be69",
    ],
  },
  amounts: {
    min: new Decimal("130"),
    max: new Decimal("2450"),
    currency: "GBP",
  },
  dates: {
    minDate: "2021-09-17T12:09:33.441Z",
    maxDate: "2021-12-16T12:12:53.441Z",
    minOverlappingDate: "2021-09-30T12:09:13.441Z",
    maxOverlappingDate: "2021-11-27T12:19:33.441Z",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                               | The data type which the data type in the URL has been matched against. For example, if you've matched accountTransactions and banking-transactions, and you call this endpoint with accountTransactions in the URL, this property would be banking-transactions. |
| `statusInfo`                                                                                                                                                                                                                                                     | [shared.DataIntegrityStatusInfo](../../../sdk/models/shared/dataintegritystatusinfo.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                              |
| `connectionIds`                                                                                                                                                                                                                                                  | [shared.DataIntegrityConnectionId](../../../sdk/models/shared/dataintegrityconnectionid.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                              |
| `amounts`                                                                                                                                                                                                                                                        | [shared.DataIntegrityAmounts](../../../sdk/models/shared/dataintegrityamounts.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                               | Only returned for transactions. For accounts, there is nothing returned.                                                                                                                                                                                         |
| `dates`                                                                                                                                                                                                                                                          | [shared.DataIntegrityDates](../../../sdk/models/shared/dataintegritydates.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                               | Only returned for transactions. For accounts, there is nothing returned.                                                                                                                                                                                         |