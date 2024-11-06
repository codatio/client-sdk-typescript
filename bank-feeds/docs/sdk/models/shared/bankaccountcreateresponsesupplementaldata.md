# BankAccountCreateResponseSupplementalData

Supplemental data is additional data you can include in our standard data types. 

It is referenced as a configured dynamic key value pair that is unique to the accounting software. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.

## Example Usage

```typescript
import { BankAccountCreateResponseSupplementalData } from "@codat/bank-feeds/sdk/models/shared";

let value: BankAccountCreateResponseSupplementalData = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `content`                             | Record<string, Record<string, *any*>> | :heavy_minus_sign:                    | N/A                                   |