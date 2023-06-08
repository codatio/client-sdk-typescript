# integrations

## Overview

View and manage your available integrations in Codat.

### Available Operations

* [get](#get) - Get integration
* [getBranding](#getbranding) - Get branding
* [list](#list) - List integrations

## get

Get single integration, by platformKey

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetIntegrationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, FeatureState, FeatureType, SourceType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.integrations.get({
  platformKey: "gbol",
}).then((res: GetIntegrationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getBranding

Get branding for platform.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetIntegrationsBrandingResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.integrations.getBranding({
  platformKey: "gbol",
}).then((res: GetIntegrationsBrandingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List your available integrations

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListIntegrationsResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, FeatureState, FeatureType, SourceType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.integrations.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "suscipit",
}).then((res: ListIntegrationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
