# webhooks

## Overview

Manage webhooks, rules and alerts.

### Available Operations

* [createRule](#createrule) - Create webhook
* [getWebhook](#getwebhook) - Get webhook
* [listRules](#listrules) - List webhooks

## createRule

Create a new webhook configuration

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { CreateRuleResponse, Rule } from "@codat/common/dist/sdk/models/operations";
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
      "info@client.com",
    ],
    webhook: "https://webhook.client.com",
  },
  type: "dolorem",
};

sdk.webhooks.createRule(req).then((res: CreateRuleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getWebhook

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

sdk.webhooks.getWebhook(req).then((res: GetWebhookResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listRules

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
  query: "culpa",
};

sdk.webhooks.listRules(req).then((res: ListRulesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
