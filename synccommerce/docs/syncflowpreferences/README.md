# syncFlowPreferences

## Overview

Configure preferences for any given Sync for Commerce company using sync flow.

### Available Operations

* [getConfigTextSyncFlow](#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [getSyncFlowUrl](#getsyncflowurl) - Retrieve sync flow url
* [getVisibleAccounts](#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [updateVisibleAccountsSyncFlow](#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow

## getConfigTextSyncFlow

To enable retrieval of preferences set for the text fields on Sync Flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetConfigTextSyncFlowResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.syncFlowPreferences.getConfigTextSyncFlow().then((res: GetConfigTextSyncFlowResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncFlowUrl

Get a URL for Sync Flow including a one time passcode.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetSyncFlowUrlRequest, GetSyncFlowUrlResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSyncFlowUrlRequest = {
  accountingKey: "vel",
  commerceKey: "error",
  merchantIdentifier: "deserunt",
};

sdk.syncFlowPreferences.getSyncFlowUrl(req).then((res: GetSyncFlowUrlResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getVisibleAccounts

Enable retrieval for accounts which are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetVisibleAccountsRequest, GetVisibleAccountsResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetVisibleAccountsRequest = {
  clientId: "674e0f46-7cc8-4796-ad15-1a05dfc2ddf7",
  platformKey: "cc78ca1b-a928-4fc8-9674-2cb739205929",
};

sdk.syncFlowPreferences.getVisibleAccounts(req).then((res: GetVisibleAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateConfigTextSyncFlow

To enable update of preferences set for the text fields on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import {  } from "@codat/sync-for-commerce/dist/sdk/models/";
import { UpdateConfigTextSyncFlowResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: . = {
  "natus": {
    required: false,
    text: "laboriosam",
  },
};

sdk.syncFlowPreferences.updateConfigTextSyncFlow(req).then((res: UpdateConfigTextSyncFlowResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateVisibleAccountsSyncFlow

To enable update of accounts visible preferences set on Sync Flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { UpdateVisibleAccountsSyncFlowRequest, UpdateVisibleAccountsSyncFlowResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateVisibleAccountsSyncFlowRequest = {
  visibleAccounts: {
    visibleAccounts: [
      "saepe",
      "fuga",
      "in",
      "corporis",
    ],
  },
  commerceKey: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
};

sdk.syncFlowPreferences.updateVisibleAccountsSyncFlow(req).then((res: UpdateVisibleAccountsSyncFlowResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
