# FinancialStatements.ProfitAndLoss

## Overview

### Available Operations

* [getCategorizedAccounts](#getcategorizedaccounts) - Get categorized profit and loss statement
* [get](#get) - Get profit and loss

## getCategorizedAccounts

The *Get categorized profit and loss statement* endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss statement. It also includes a balance as of the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](https://docs.codat.io/lending/features/financial-statements-overview#recategorizing-accounts) to a more suitable one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-categorized-profit-and-loss-statement" method="get" path="/companies/{companyId}/reports/enhancedProfitAndLoss/accounts" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.getCategorizedAccounts({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: "29-09-2020",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGetCategorizedAccounts } from "@codat/lending/funcs/financialStatementsProfitAndLossGetCategorizedAccounts.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGetCategorizedAccounts(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: "29-09-2020",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGetCategorizedAccounts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCategorizedProfitAndLossStatementRequest](../../sdk/models/operations/getcategorizedprofitandlossstatementrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.EnhancedFinancialReport](../../sdk/models/shared/enhancedfinancialreport.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## get

Gets the latest profit and loss for a company.

### Example Usage: Clear Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Clear Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Dynamics 365 Business Central" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (Netherlands)

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Exact (Netherlands)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Exact (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: FreshBooks

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="FreshBooks" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: KashFlow

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="KashFlow" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: MYOB AccountRight and Essentials

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="MYOB AccountRight and Essentials" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Oracle NetSuite

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Oracle NetSuite" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="QuickBooks Online" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online Sandbox

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="QuickBooks Online Sandbox" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 200cloud

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Sage 200cloud" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 50 (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Sage 50 (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Business Cloud Accounting

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Sage Business Cloud Accounting" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Wave

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Wave" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```
### Example Usage: Zoho Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-profit-and-loss" method="get" path="/companies/{companyId}/data/financials/profitAndLoss" example="Zoho Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialStatementsProfitAndLossGet } from "@codat/lending/funcs/financialStatementsProfitAndLossGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialStatementsProfitAndLossGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialStatementsProfitAndLossGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingProfitAndLossRequest](../../sdk/models/operations/getaccountingprofitandlossrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingProfitAndLossReport](../../sdk/models/shared/accountingprofitandlossreport.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 401, 402, 403, 404, 409, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |