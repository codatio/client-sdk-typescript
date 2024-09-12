# LoanSummaryRecordRef

## Example Usage

```typescript
import { LoanSummaryRecordRef } from "@codat/lending/sdk/models/shared";

let value: LoanSummaryRecordRef = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the object being referred to.                                                       |
| `dataConnectionId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The dataConnectionId the object being referred to is associated with.                         |
| `integrationType`                                                                             | [shared.LoanSummaryIntegrationType](../../../sdk/models/shared/loansummaryintegrationtype.md) | :heavy_minus_sign:                                                                            | The integration type begin referred to.                                                       |
| `recordRefType`                                                                               | [shared.LoanSummaryRecordRefType](../../../sdk/models/shared/loansummaryrecordreftype.md)     | :heavy_minus_sign:                                                                            | The datatype being referred to.                                                               |