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
import { GetConfigurationRequest, GetConfigurationResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetConfigurationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.configuration.getConfiguration(req).then((res: GetConfigurationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncStatus

Check the sync history and sync status for a company.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetSyncStatusRequest, GetSyncStatusResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSyncStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.configuration.getSyncStatus(req).then((res: GetSyncStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## setConfiguration

Make changes to configuration preferences.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { SetConfigurationRequest, SetConfigurationResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: SetConfigurationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.configuration.setConfiguration(req).then((res: SetConfigurationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
