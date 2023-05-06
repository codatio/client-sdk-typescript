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

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhooks.create({
  companyId: "39b73b17-cc2e-429e-915d-71654e9dcd1e",
  id: "ff89c50e-a719-4ef5-a182-9917e53927b6",
  notifiers: {
    emails: [
      "info@client.com",
    ],
    webhook: "https://webhook.client.com",
  },
  type: "reiciendis",
}).then((res: CreateRuleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get a single webhook

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetWebhookResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhooks.get({
  ruleId: "7318949f-c008-4936-a8ff-10d7ab563fa6",
}).then((res: GetWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List webhooks that you are subscribed to.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListRulesResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhooks.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "est",
}).then((res: ListRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
