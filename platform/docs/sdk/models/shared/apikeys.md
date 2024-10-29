# ApiKeys

## Example Usage

```typescript
import { ApiKeys } from "@codat/platform/sdk/models/shared";

let value: ApiKeys = {
  results: [
    {
      id: "e288a972-b402-4b21-93f9-b5335ae5679c",
      name: "azure-invoice-finance-processor",
      apiKey: "ztHQGvnC4XN2CgUhaDWEG4ySLUJqWjp7zkbZkGHd",
      createdDate: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `results`                                                             | [shared.ApiKeyDetails](../../../sdk/models/shared/apikeydetails.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |