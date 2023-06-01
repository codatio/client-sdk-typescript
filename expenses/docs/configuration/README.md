# configuration

## Overview

Companies sync configuration.

### Available Operations

* [getCompanyConfiguration](#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](#savecompanyconfiguration) - Set company configuration

## getCompanyConfiguration

Gets a companies expense sync configuration

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.configuration.getCompanyConfiguration({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## saveCompanyConfiguration

Sets a companies expense sync configuration

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { SaveCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.configuration.saveCompanyConfiguration({
  companyConfiguration: {
    bankAccount: {
      id: "32",
    },
    customer: {
      id: "142",
    },
    supplier: {
      id: "124",
    },
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: SaveCompanyConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
