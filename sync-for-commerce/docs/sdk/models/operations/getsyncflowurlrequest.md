# GetSyncFlowUrlRequest

## Example Usage

```typescript
import { GetSyncFlowUrlRequest } from "@codat/sync-for-commerce/sdk/models/operations";

let value: GetSyncFlowUrlRequest = {
  commerceKey: "<value>",
  accountingKey: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `commerceKey`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Commerce platform key                                                       |
| `accountingKey`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | Accounting platform key                                                     |
| `merchantIdentifier`                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | Identifier for your merchant, can be the merchant name or Codat company id. |