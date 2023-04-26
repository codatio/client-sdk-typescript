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
import { GetMappingOptionsRequest, GetMappingOptionsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import {
  AccountMappingInfoAccountTypeEnum,
  AccountMappingInfoValidTransactionTypesEnum,
  TaxRateMappingInfoValidTransactionTypesEnum,
} from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetMappingOptionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.mappingOptions.getMappingOptions(req).then((res: GetMappingOptionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
