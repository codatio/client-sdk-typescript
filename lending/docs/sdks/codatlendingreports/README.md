# AccountsReceivable.Reports

## Overview

### Available Operations

* [isAgedDebtorsAvailable](#isageddebtorsavailable) - Aged debtors report available
* [getAgedDebtors](#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](#isagedcreditorsavailable) - Aged creditors report available
* [getAgedCreditors](#getagedcreditors) - Aged creditors report

## isAgedDebtorsAvailable

Indicates whether the aged debtors report is available for the company.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="is-aged-debtors-report-available" method="get" path="/companies/{companyId}/reports/agedDebtor/available" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.isAgedDebtorsAvailable({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsIsAgedDebtorsAvailable } from "@codat/lending/funcs/accountsReceivableReportsIsAgedDebtorsAvailable.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsIsAgedDebtorsAvailable(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsIsAgedDebtorsAvailable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IsAgedDebtorsReportAvailableRequest](../../sdk/models/operations/isageddebtorsreportavailablerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[boolean](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getAgedDebtors

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage: Clear Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Clear Books" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Dynamics 365 Business Central" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: FreshBooks

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="FreshBooks" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: KashFlow

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="KashFlow" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: MYOB AccountRight and Essentials

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="MYOB AccountRight and Essentials" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Oracle NetSuite

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Oracle NetSuite" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="QuickBooks Online" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 200cloud

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Sage 200cloud" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 50 (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Sage 50 (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Business Cloud Accounting

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Sage Business Cloud Accounting" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Intacct

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Sage Intacct" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```
### Example Usage: Zoho Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-debtors-report" method="get" path="/companies/{companyId}/reports/agedDebtor" example="Zoho Books" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedDebtors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedDebtors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedDebtors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedDebtors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedDebtors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingAgedDebtorsReportRequest](../../sdk/models/operations/getaccountingageddebtorsreportrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingAgedDebtorReport](../../sdk/models/shared/accountingageddebtorreport.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## isAgedCreditorsAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="is-aged-creditors-report-available" method="get" path="/companies/{companyId}/reports/agedCreditor/available" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.isAgedCreditorsAvailable({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsIsAgedCreditorsAvailable } from "@codat/lending/funcs/accountsReceivableReportsIsAgedCreditorsAvailable.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsIsAgedCreditorsAvailable(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsIsAgedCreditorsAvailable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IsAgedCreditorsReportAvailableRequest](../../sdk/models/operations/isagedcreditorsreportavailablerequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[boolean](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getAgedCreditors

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

### Example Usage: Clear Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Clear Books" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Dynamics 365 Business Central" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (Netherlands)

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Exact (Netherlands)" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Exact (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: FreeAgent

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="FreeAgent" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: MYOB AccountRight and Essentials

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="MYOB AccountRight and Essentials" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Oracle NetSuite

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Oracle NetSuite" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="QuickBooks Online" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 200cloud

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Sage 200cloud" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 50 (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Sage 50 (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Business Cloud Accounting

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Sage Business Cloud Accounting" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Intacct

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Sage Intacct" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="get-accounting-aged-creditors-report" method="get" path="/companies/{companyId}/reports/agedCreditor" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";
import { RFCDate } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.reports.getAgedCreditors({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableReportsGetAgedCreditors } from "@codat/lending/funcs/accountsReceivableReportsGetAgedCreditors.js";
import { RFCDate } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableReportsGetAgedCreditors(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: new RFCDate("2022-12-31"),
    numberOfPeriods: 12,
    periodLengthDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsReceivableReportsGetAgedCreditors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingAgedCreditorsReportRequest](../../sdk/models/operations/getaccountingagedcreditorsreportrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingAgedCreditorReport](../../sdk/models/shared/accountingagedcreditorreport.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |