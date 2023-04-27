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
import { GetIntegrationBrandingRequest, GetIntegrationBrandingResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetIntegrationBrandingRequest = {
  platformKey: "quibusdam",
};

sdk.integrations.getIntegrationBranding(req).then((res: GetIntegrationBrandingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listIntegrations

Retrieve a list of available integrations support by datatype and state of release.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { ListIntegrationsRequest, ListIntegrationsResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { DataTypeFeatureDataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListIntegrationsRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
};

sdk.integrations.listIntegrations(req).then((res: ListIntegrationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```