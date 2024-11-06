# CreateConnectionRequest

## Example Usage

```typescript
import { CreateConnectionRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: CreateConnectionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  requestBody: {
    platformKey: "gbol",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique identifier for a company.                                                                        | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                    |
| `requestBody`                                                                                           | [operations.CreateConnectionRequestBody](../../../sdk/models/operations/createconnectionrequestbody.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |