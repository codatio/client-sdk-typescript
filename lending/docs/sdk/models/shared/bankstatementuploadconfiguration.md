# BankStatementUploadConfiguration

Configuration settings for uploading banking data to Codat

## Example Usage

```typescript
import { BankStatementUploadConfiguration } from "@codat/lending/sdk/models/shared";

let value: BankStatementUploadConfiguration = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `source`                                                     | [shared.Source](../../../sdk/models/shared/source.md)        | :heavy_minus_sign:                                           | The source of the banking data that determines its format    |
| `accountId`                                                  | *string*                                                     | :heavy_minus_sign:                                           | The ID of the account in the third-party platform            |
| `providerId`                                                 | *string*                                                     | :heavy_minus_sign:                                           | TrueLayer provider ID (only required if source is TrueLayer) |