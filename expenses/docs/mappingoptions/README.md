# mappingOptions

## Overview

Mapping options for a companies expenses.

### Available Operations

* [getMappingOptions](#getmappingoptions) - Mapping options

## getMappingOptions

Gets the expense mapping options for a companies accounting software

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetMappingOptionsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import {
  AccountMappingInfoAccountType,
  AccountMappingInfoValidTransactionTypes,
  TaxRateMappingInfoValidTransactionTypes,
} from "@codat/sync-for-expenses/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.mappingOptions.getMappingOptions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetMappingOptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
