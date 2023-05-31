# integrations

## Overview

View useful information about codat's integrations.

### Available Operations

* [getIntegrationBranding](#getintegrationbranding) - Get branding for an integration
* [listIntegrations](#listintegrations) - List information on Codat's supported integrations

## getIntegrationBranding

Retrieve Integration branding assets.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetIntegrationBrandingResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.integrations.getIntegrationBranding({
  platformKey: "quibusdam",
}).then((res: GetIntegrationBrandingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listIntegrations

Retrieve a list of available integrations support by datatype and state of release.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { ListIntegrationsResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { DataTypeFeatureDataType, FeatureState, FeatureType, SourceType } from "@codat/sync-for-commerce/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.integrations.listIntegrations({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
}).then((res: ListIntegrationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
