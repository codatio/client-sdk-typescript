# ReportGenerationPayload

## Example Usage

```typescript
import { ReportGenerationPayload } from "@codat/lending/sdk/models/shared";

let value: ReportGenerationPayload = {
  id: "a78e2625-7190-4d94-ae3b-071320451026",
  referenceCompany: {
    id: "8a210b68-6988-11ed-a1eb-0242ac120002",
    name: "Codat Ltd.",
    description: "Requested early access to the new financing scheme.",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier of the report.                                          | a78e2625-7190-4d94-ae3b-071320451026                                      |
| `referenceCompany`                                                        | [shared.CompanyReference](../../../sdk/models/shared/companyreference.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |