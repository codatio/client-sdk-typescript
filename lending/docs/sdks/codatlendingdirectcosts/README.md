# LoanWriteback.DirectCosts

## Overview

### Available Operations

* [getCreateModel](#getcreatemodel) - Get create direct cost model
* [create](#create) - Create direct cost

## getCreateModel

The *Get create direct cost model* endpoint returns the expected data for the request payload when creating a [direct cost](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company and integration.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are business expenses that don't impact Accounts Payable.

**Integration-specific behavior**

See the *response examples* for integration-specific indicative models.


### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Dynamics 365 Business Central" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: FreeAgent

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="FreeAgent" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: Oracle NetSuite

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Oracle NetSuite" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="QuickBooks Online" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online Sandbox

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="QuickBooks Online Sandbox" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 50 (UK)

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Sage 50 (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Intacct

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Sage Intacct" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: Sandbox

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Sandbox" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```
### Example Usage: Zoho Books

<!-- UsageSnippet language="typescript" operationID="get-create-directCosts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/directCosts" example="Zoho Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsGetCreateModel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateDirectCostsModelRequest](../../sdk/models/operations/getcreatedirectcostsmodelrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PushOption](../../sdk/models/shared/pushoption.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## create

The *Create direct cost* endpoint creates a new [direct cost](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are business expenses that don't impact Accounts Payable.

**Integration-specific behavior**

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/lending-api#/operations/get-create-directCosts-model).

### Example Usage: FreeAgent

<!-- UsageSnippet language="typescript" operationID="create-direct-cost" method="post" path="/companies/{companyId}/connections/{connectionId}/push/directCosts" example="FreeAgent" -->
```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      issueDate: "2023-02-12",
      currency: "GBP",
      lineItems: [
        {
          unitAmount: new Decimal("15"),
          quantity: new Decimal("1"),
          subTotal: new Decimal("15"),
          accountRef: {
            id: "288",
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            accountRef: {
              id: "750-1",
            },
          },
          allocation: {},
        },
      ],
      subTotal: new Decimal("15"),
      taxAmount: new Decimal("0"),
      totalAmount: new Decimal("15"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsCreate } from "@codat/lending/funcs/loanWritebackDirectCostsCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      issueDate: "2023-02-12",
      currency: "GBP",
      lineItems: [
        {
          unitAmount: new Decimal("15"),
          quantity: new Decimal("1"),
          subTotal: new Decimal("15"),
          accountRef: {
            id: "288",
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            accountRef: {
              id: "750-1",
            },
          },
          allocation: {},
        },
      ],
      subTotal: new Decimal("15"),
      taxAmount: new Decimal("0"),
      totalAmount: new Decimal("15"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="create-direct-cost" method="post" path="/companies/{companyId}/connections/{connectionId}/push/directCosts" example="Malformed query" -->
```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      issueDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      lineItems: [],
      paymentAllocations: [
        {
          payment: {
            accountRef: {},
            currency: "GBP",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "GBP",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      subTotal: new Decimal("3566.34"),
      taxAmount: new Decimal("7664.68"),
      totalAmount: new Decimal("208.93"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsCreate } from "@codat/lending/funcs/loanWritebackDirectCostsCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      issueDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      lineItems: [],
      paymentAllocations: [
        {
          payment: {
            accountRef: {},
            currency: "GBP",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "GBP",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      subTotal: new Decimal("3566.34"),
      taxAmount: new Decimal("7664.68"),
      totalAmount: new Decimal("208.93"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="create-direct-cost" method="post" path="/companies/{companyId}/connections/{connectionId}/push/directCosts" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "test ref",
      note: "directCost 21/03 09.20",
      contactRef: {
        id: "80000001-1671793885",
        dataType: "suppliers",
      },
      issueDate: "2023-03-21T10:19:52.223Z",
      currency: "USD",
      lineItems: [
        {
          description: "test description line 1",
          unitAmount: new Decimal("7"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          discountPercentage: new Decimal("0"),
          subTotal: new Decimal("99"),
          taxAmount: new Decimal("360"),
          totalAmount: new Decimal("70"),
          accountRef: {
            id: "8000000D-1671793811",
            name: "Purchases - Hardware for Resale",
          },
          itemRef: {
            id: "80000001-1674566705",
            name: "item test",
          },
          trackingCategoryRefs: [
            {
              id: "80000001-1674553252",
              name: "Class 1",
            },
          ],
        },
      ],
      paymentAllocations: [
        {
          payment: {
            note: "payment allocations note",
            reference: "payment allocations reference",
            accountRef: {
              id: "80000028-1671794219",
              name: "Bank Account 1",
            },
            paidOnDate: "2023-01-28T10:19:52.223Z",
            totalAmount: new Decimal("54"),
          },
          allocation: {
            currencyRate: new Decimal("0"),
            allocatedOnDate: "2023-01-29T10:19:52.223Z",
            totalAmount: new Decimal("88"),
          },
        },
      ],
      subTotal: new Decimal("362"),
      taxAmount: new Decimal("4"),
      totalAmount: new Decimal("366"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsCreate } from "@codat/lending/funcs/loanWritebackDirectCostsCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "test ref",
      note: "directCost 21/03 09.20",
      contactRef: {
        id: "80000001-1671793885",
        dataType: "suppliers",
      },
      issueDate: "2023-03-21T10:19:52.223Z",
      currency: "USD",
      lineItems: [
        {
          description: "test description line 1",
          unitAmount: new Decimal("7"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          discountPercentage: new Decimal("0"),
          subTotal: new Decimal("99"),
          taxAmount: new Decimal("360"),
          totalAmount: new Decimal("70"),
          accountRef: {
            id: "8000000D-1671793811",
            name: "Purchases - Hardware for Resale",
          },
          itemRef: {
            id: "80000001-1674566705",
            name: "item test",
          },
          trackingCategoryRefs: [
            {
              id: "80000001-1674553252",
              name: "Class 1",
            },
          ],
        },
      ],
      paymentAllocations: [
        {
          payment: {
            note: "payment allocations note",
            reference: "payment allocations reference",
            accountRef: {
              id: "80000028-1671794219",
              name: "Bank Account 1",
            },
            paidOnDate: "2023-01-28T10:19:52.223Z",
            totalAmount: new Decimal("54"),
          },
          allocation: {
            currencyRate: new Decimal("0"),
            allocatedOnDate: "2023-01-29T10:19:52.223Z",
            totalAmount: new Decimal("88"),
          },
        },
      ],
      subTotal: new Decimal("362"),
      taxAmount: new Decimal("4"),
      totalAmount: new Decimal("366"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Intacct

<!-- UsageSnippet language="typescript" operationID="create-direct-cost" method="post" path="/companies/{companyId}/connections/{connectionId}/push/directCosts" example="Sage Intacct" -->
```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "test ref",
      note: "Test 1",
      issueDate: "2023-03-31T00:00:00",
      currency: "USD",
      currencyRate: new Decimal("0.5"),
      lineItems: [
        {
          unitAmount: new Decimal("9.99"),
          quantity: new Decimal("1"),
          subTotal: new Decimal("9.99"),
          taxAmount: new Decimal("2"),
          totalAmount: new Decimal("11.99"),
          accountRef: {
            id: "195",
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            id: "4355",
            note: "test note",
            reference: "test reference",
            accountRef: {
              id: "348",
              name: "CMRR Renewal",
            },
            currency: "USD",
            paidOnDate: "2023-03-31T00:00:00",
            totalAmount: new Decimal("11.99"),
          },
          allocation: {
            currency: "USD",
            allocatedOnDate: "2023-03-31T00:00:00",
            totalAmount: new Decimal("11.99"),
          },
        },
      ],
      subTotal: new Decimal("9.99"),
      taxAmount: new Decimal("2"),
      totalAmount: new Decimal("11.99"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsCreate } from "@codat/lending/funcs/loanWritebackDirectCostsCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "test ref",
      note: "Test 1",
      issueDate: "2023-03-31T00:00:00",
      currency: "USD",
      currencyRate: new Decimal("0.5"),
      lineItems: [
        {
          unitAmount: new Decimal("9.99"),
          quantity: new Decimal("1"),
          subTotal: new Decimal("9.99"),
          taxAmount: new Decimal("2"),
          totalAmount: new Decimal("11.99"),
          accountRef: {
            id: "195",
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            id: "4355",
            note: "test note",
            reference: "test reference",
            accountRef: {
              id: "348",
              name: "CMRR Renewal",
            },
            currency: "USD",
            paidOnDate: "2023-03-31T00:00:00",
            totalAmount: new Decimal("11.99"),
          },
          allocation: {
            currency: "USD",
            allocatedOnDate: "2023-03-31T00:00:00",
            totalAmount: new Decimal("11.99"),
          },
        },
      ],
      subTotal: new Decimal("9.99"),
      taxAmount: new Decimal("2"),
      totalAmount: new Decimal("11.99"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="create-direct-cost" method="post" path="/companies/{companyId}/connections/{connectionId}/push/directCosts" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "Scenario One neg DC",
      contactRef: {
        id: "699f0091-b127-4796-9f15-41a2f42abeb2",
        dataType: "suppliers",
      },
      issueDate: "2023-02-25",
      currency: "GBP",
      lineItems: [
        {
          description: "negative direct cost",
          unitAmount: new Decimal("35"),
          quantity: new Decimal("-1"),
          subTotal: new Decimal("-35"),
          taxAmount: new Decimal("-7"),
          totalAmount: new Decimal("-42"),
          taxRateRef: {
            id: "INPUT2",
          },
          itemRef: {
            id: "965cfc0e-4d80-4059-9641-4a392f9ad549",
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            accountRef: {
              id: "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
            },
            currency: "GBP",
          },
          allocation: {
            totalAmount: new Decimal("-42"),
          },
        },
      ],
      subTotal: new Decimal("-35"),
      taxAmount: new Decimal("-7"),
      totalAmount: new Decimal("-42"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsCreate } from "@codat/lending/funcs/loanWritebackDirectCostsCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "Scenario One neg DC",
      contactRef: {
        id: "699f0091-b127-4796-9f15-41a2f42abeb2",
        dataType: "suppliers",
      },
      issueDate: "2023-02-25",
      currency: "GBP",
      lineItems: [
        {
          description: "negative direct cost",
          unitAmount: new Decimal("35"),
          quantity: new Decimal("-1"),
          subTotal: new Decimal("-35"),
          taxAmount: new Decimal("-7"),
          totalAmount: new Decimal("-42"),
          taxRateRef: {
            id: "INPUT2",
          },
          itemRef: {
            id: "965cfc0e-4d80-4059-9641-4a392f9ad549",
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            accountRef: {
              id: "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
            },
            currency: "GBP",
          },
          allocation: {
            totalAmount: new Decimal("-42"),
          },
        },
      ],
      subTotal: new Decimal("-35"),
      taxAmount: new Decimal("-7"),
      totalAmount: new Decimal("-42"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackDirectCostsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDirectCostRequest](../../sdk/models/operations/createdirectcostrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreateDirectCostResponse](../../sdk/models/shared/accountingcreatedirectcostresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |