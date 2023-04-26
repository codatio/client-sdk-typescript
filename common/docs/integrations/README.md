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
import { GetIntegrationRequest, GetIntegrationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetIntegrationRequest = {
  platformKey: "gbol",
};

sdk.integrations.get(req).then((res: GetIntegrationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBranding

Get branding for platform.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetIntegrationsBrandingRequest, GetIntegrationsBrandingResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetIntegrationsBrandingRequest = {
  platformKey: "gbol",
};

sdk.integrations.getBranding(req).then((res: GetIntegrationsBrandingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List your available integrations

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListIntegrationsRequest, ListIntegrationsResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListIntegrationsRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "veritatis",
};

sdk.integrations.list(req).then((res: ListIntegrationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
