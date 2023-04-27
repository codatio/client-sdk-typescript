# webhooks

## Overview

Manage webhooks, rules and alerts.

### Available Operations

* [create](#create) - Create webhook
* [get](#get) - Get webhook
* [list](#list) - List webhooks

## create

Create a new webhook configuration

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { CreateRuleResponse } from "@codat/common/dist/sdk/models/operations";
import { Rule } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Rule = {
  companyId: "39b73b17-cc2e-429e-915d-71654e9dcd1e",
  id: "ff89c50e-a719-4ef5-a182-9917e53927b6",
  notifiers: {
    emails: [
      "info@client.com",
      "info@client.com",
    ],
    webhook: "https://webhook.client.com",
  },
  type: "minima",
};

sdk.webhooks.create(req).then((res: CreateRuleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get a single webhook

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetWebhookRequest, GetWebhookResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetWebhookRequest = {
  ruleId: "7318949f-c008-4936-a8ff-10d7ab563fa6",
};

sdk.webhooks.get(req).then((res: GetWebhookResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List webhooks that you are subscribed to.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListRulesRequest, ListRulesResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListRulesRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "excepturi",
};

sdk.webhooks.list(req).then((res: ListRulesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```