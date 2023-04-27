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
import { DataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.integrations.get({
  platformKey: "gbol",
}).then((res: GetIntegrationResponse | AxiosError) => {
  if (res instanceof GetIntegrationResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.integrations.getBranding({
  platformKey: "gbol",
}).then((res: GetIntegrationsBrandingResponse | AxiosError) => {
  if (res instanceof GetIntegrationsBrandingResponse && res.statusCode == 200) {
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
import { DataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.integrations.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "veritatis",
}).then((res: ListIntegrationsResponse | AxiosError) => {
  if (res instanceof ListIntegrationsResponse && res.statusCode == 200) {
    // handle response
  }
});
```
