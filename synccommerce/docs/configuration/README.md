# configuration

## Overview

Expressively configure preferences for any given Sync for Commerce company.

### Available Operations

* [getConfiguration](#getconfiguration) - Retrieve config preferences set for a company.
* [getSyncStatus](#getsyncstatus) - Get status for a company's syncs
* [setConfiguration](#setconfiguration) - Create or update configuration.

## getConfiguration

Retrieve current config preferences.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetConfigurationResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.configuration.getConfiguration({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetConfigurationResponse | AxiosError) => {
  if (res instanceof GetConfigurationResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncStatus

Check the sync history and sync status for a company.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetSyncStatusResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.configuration.getSyncStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetSyncStatusResponse | AxiosError) => {
  if (res instanceof GetSyncStatusResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## setConfiguration

Make changes to configuration preferences.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { SetConfigurationResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.configuration.setConfiguration({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: SetConfigurationResponse | AxiosError) => {
  if (res instanceof SetConfigurationResponse && res.statusCode == 200) {
    // handle response
  }
});
```
