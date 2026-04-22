# AccountsPayable.Bills

## Overview

### Available Operations

* [list](#list) - List bills
* [get](#get) - Get bill
* [listAttachments](#listattachments) - List bill attachments
* [getAttachment](#getattachment) - Get bill attachment
* [downloadAttachment](#downloadattachment) - Download bill attachment

## list

The *List bills* endpoint returns a list of [bills](https://docs.codat.io/lending-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).

### Tips and traps

To access the `paymentAllocations` property, ensure that the `billPayments` data type is queued and cached in Codat before retrieving `bills` from Codat's cache.


### Example Usage: Clear Books

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Clear Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Dynamics 365 Business Central" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (Netherlands)

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Exact (Netherlands)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (UK)

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Exact (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: FreeAgent

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="FreeAgent" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: FreshBooks

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="FreshBooks" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: KashFlow

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="KashFlow" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Oracle NetSuite

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Oracle NetSuite" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="QuickBooks Online" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online Sandbox

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="QuickBooks Online Sandbox" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 200cloud

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Sage 200cloud" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 50 (UK)

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Sage 50 (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Business Cloud Accounting

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Sage Business Cloud Accounting" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Intacct

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Sage Intacct" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```
### Example Usage: Zoho Books

<!-- UsageSnippet language="typescript" operationID="list-accounting-bills" method="get" path="/companies/{companyId}/data/bills" example="Zoho Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsList } from "@codat/lending/funcs/accountsPayableBillsList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsList(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingBillsRequest](../../sdk/models/operations/listaccountingbillsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBills](../../sdk/models/shared/accountingbills.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorMessage               | 500, 503                          | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## get

The *Get bill* endpoint returns a single bill for a given billId.

[Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).

### Tips and traps

To access the `paymentAllocations` property, ensure that the `billPayments` data type is queued and cached in Codat before retrieving `bills` from Codat's cache.


### Example Usage: Clear Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Clear Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Dynamics 365 Business Central" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (Netherlands)

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Exact (Netherlands)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Exact (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Exact (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: FreeAgent

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="FreeAgent" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: FreshBooks

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="FreshBooks" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: KashFlow

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="KashFlow" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Oracle NetSuite

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Oracle NetSuite" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Desktop

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="QuickBooks Desktop" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="QuickBooks Online" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online Sandbox

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="QuickBooks Online Sandbox" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 200cloud

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Sage 200cloud" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage 50 (UK)

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Sage 50 (UK)" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Business Cloud Accounting

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Sage Business Cloud Accounting" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Sage Intacct

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Sage Intacct" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Xero

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Xero" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```
### Example Usage: Zoho Books

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill" method="get" path="/companies/{companyId}/data/bills/{billId}" example="Zoho Books" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGet } from "@codat/lending/funcs/accountsPayableBillsGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingBillRequest](../../sdk/models/operations/getaccountingbillrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBill](../../sdk/models/shared/accountingbill.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 401, 402, 403, 404, 409, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## listAttachments

The *List bill attachments* endpoint returns a list of attachments available to download for a given `billId`.

[Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-accounting-bill-attachments" method="get" path="/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.listAttachments({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsListAttachments } from "@codat/lending/funcs/accountsPayableBillsListAttachments.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsListAttachments(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsListAttachments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingBillAttachmentsRequest](../../sdk/models/operations/listaccountingbillattachmentsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Attachments](../../sdk/models/shared/attachments.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 401, 402, 403, 404, 409, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getAttachment

The *Get bill attachment* endpoint returns a specific attachment for a given `billId` and `attachmentId`.

[Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-accounting-bill-attachment" method="get" path="/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments/{attachmentId}" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.getAttachment({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsGetAttachment } from "@codat/lending/funcs/accountsPayableBillsGetAttachment.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsGetAttachment(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsGetAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingBillAttachmentRequest](../../sdk/models/operations/getaccountingbillattachmentrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingAttachment](../../sdk/models/shared/accountingattachment.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## downloadAttachment

The *Download bill attachment* endpoint downloads a specific attachment for a given `billId` and `attachmentId`.

[Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download-accounting-bill-attachment" method="get" path="/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments/{attachmentId}/download" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsPayable.bills.downloadAttachment({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsPayableBillsDownloadAttachment } from "@codat/lending/funcs/accountsPayableBillsDownloadAttachment.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsPayableBillsDownloadAttachment(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsPayableBillsDownloadAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadAccountingBillAttachmentRequest](../../sdk/models/operations/downloadaccountingbillattachmentrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/data.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |