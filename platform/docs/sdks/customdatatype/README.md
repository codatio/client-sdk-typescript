# CustomDataType

## Overview

Configure and pull additional data types that are not included in Codat's standardized data model.

### Available Operations

* [configure](#configure) - Configure custom data type
* [getConfiguration](#getconfiguration) - Get custom data configuration
* [refresh](#refresh) - Refresh custom data type
* [list](#list) - List custom data type records

## configure

The *Configure custom data type* endpoint allows you to maintain or change the configuration required to return a custom data type for a specific integration. 

A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.

### Tips and traps

- You can only configure a single custom data type for a single platform at a time. Use the endpoint multiple times if you need to configure it for multiple platforms. 

- You can only indicate a single data source for each customer data type. 

- Make your custom configuration as similar as possible to our standard data types so you can interact with them in exactly the same way.

### Example Usage: Dynamics 365 Business Central

<!-- UsageSnippet language="typescript" operationID="configure-custom-data-type" method="put" path="/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}" example="Dynamics 365 Business Central" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.configure({
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "api/purchaseOrders",
      requiredData: {
        "currency": "$[*].currencyCode",
        "number": "$[*].number",
        "date": "$[*].orderDate",
        "totalexvat": "$[*].totalAmountExcludingTax",
        "totaltax": "$[*].totalTaxAmount",
        "vendor": "$[*].number",
      },
      keyBy: [
        "$[*].id",
      ],
      sourceModifiedDate: [
        "$[*].lastModifiedDateTime",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeConfigure } from "@codat/platform/funcs/customDataTypeConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeConfigure(codatPlatform, {
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "api/purchaseOrders",
      requiredData: {
        "currency": "$[*].currencyCode",
        "number": "$[*].number",
        "date": "$[*].orderDate",
        "totalexvat": "$[*].totalAmountExcludingTax",
        "totaltax": "$[*].totalTaxAmount",
        "vendor": "$[*].number",
      },
      keyBy: [
        "$[*].id",
      ],
      sourceModifiedDate: [
        "$[*].lastModifiedDateTime",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: QuickBooks Online

<!-- UsageSnippet language="typescript" operationID="configure-custom-data-type" method="put" path="/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}" example="QuickBooks Online" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.configure({
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "/query?query=select * from Account",
      requiredData: {
        "id": "$.Id",
        "Currentbal": "$.CurrentBalance",
        "SubAcc": "$.SubAccount",
      },
      keyBy: [
        "$.Id",
      ],
      sourceModifiedDate: [
        "$.time",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeConfigure } from "@codat/platform/funcs/customDataTypeConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeConfigure(codatPlatform, {
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "/query?query=select * from Account",
      requiredData: {
        "id": "$.Id",
        "Currentbal": "$.CurrentBalance",
        "SubAcc": "$.SubAccount",
      },
      keyBy: [
        "$.Id",
      ],
      sourceModifiedDate: [
        "$.time",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Unauthorized

<!-- UsageSnippet language="typescript" operationID="configure-custom-data-type" method="put" path="/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}" example="Unauthorized" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.configure({
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "api/purchaseOrders?$filter=currencyCode eq 'NOK'",
      requiredData: {
        "currencyCode": "$[*].currencyCode",
        "id": "$[*].id",
        "number": "$[*].number",
        "orderDate": "$[*].orderDate",
        "totalAmountExcludingTax": "$[*].totalAmountExcludingTax",
        "totalTaxAmount": "$[*].totalTaxAmount",
        "vendorName": "$[*].number",
      },
      keyBy: [
        "$[*].id",
      ],
      sourceModifiedDate: [
        "$[*].lastModifiedDateTime",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeConfigure } from "@codat/platform/funcs/customDataTypeConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeConfigure(codatPlatform, {
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "api/purchaseOrders?$filter=currencyCode eq 'NOK'",
      requiredData: {
        "currencyCode": "$[*].currencyCode",
        "id": "$[*].id",
        "number": "$[*].number",
        "orderDate": "$[*].orderDate",
        "totalAmountExcludingTax": "$[*].totalAmountExcludingTax",
        "totalTaxAmount": "$[*].totalTaxAmount",
        "vendorName": "$[*].number",
      },
      keyBy: [
        "$[*].id",
      ],
      sourceModifiedDate: [
        "$[*].lastModifiedDateTime",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero Mapping Arrays

<!-- UsageSnippet language="typescript" operationID="configure-custom-data-type" method="put" path="/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}" example="Xero Mapping Arrays" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.configure({
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "/api.xro/2.0/Invoices",
      requiredData: {
        "invNumber": "$.InvoiceNumber",
        "type": "$.Type",
        "InvoiceID": "$.InvoiceID",
        "lines": "$.LineItems[*]",
      },
      keyBy: [
        "$.InvoiceID",
      ],
      sourceModifiedDate: [
        "$.UpdatedDateUTC",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeConfigure } from "@codat/platform/funcs/customDataTypeConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeConfigure(codatPlatform, {
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "/api.xro/2.0/Invoices",
      requiredData: {
        "invNumber": "$.InvoiceNumber",
        "type": "$.Type",
        "InvoiceID": "$.InvoiceID",
        "lines": "$.LineItems[*]",
      },
      keyBy: [
        "$.InvoiceID",
      ],
      sourceModifiedDate: [
        "$.UpdatedDateUTC",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero Simple Record

<!-- UsageSnippet language="typescript" operationID="configure-custom-data-type" method="put" path="/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}" example="Xero Simple Record" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.configure({
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "/api.xro/2.0/Accounts",
      requiredData: {
        "code": "$.Code",
        "accountId": "$.AccountID",
        "type": "$.Type",
        "SysAcc": "$.SystemAccount",
      },
      keyBy: [
        "$.AccountID",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeConfigure } from "@codat/platform/funcs/customDataTypeConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeConfigure(codatPlatform, {
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
    customDataTypeConfiguration: {
      dataSource: "/api.xro/2.0/Accounts",
      requiredData: {
        "code": "$.Code",
        "accountId": "$.AccountID",
        "type": "$.Type",
        "SysAcc": "$.SystemAccount",
      },
      keyBy: [
        "$.AccountID",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeConfigure failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConfigureCustomDataTypeRequest](../../sdk/models/operations/configurecustomdatatyperequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CustomDataTypeConfiguration](../../sdk/models/shared/customdatatypeconfiguration.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getConfiguration

The *Get custom data configuration* endpoint returns existing configuration details for the specified custom data type and integration pair you previously configured.

A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-custom-data-type-configuration" method="get" path="/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.getConfiguration({
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeGetConfiguration } from "@codat/platform/funcs/customDataTypeGetConfiguration.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeGetConfiguration(codatPlatform, {
    platformKey: "gbol",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeGetConfiguration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomDataTypeConfigurationRequest](../../sdk/models/operations/getcustomdatatypeconfigurationrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CustomDataTypeRecords](../../sdk/models/shared/customdatatyperecords.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## refresh

The *Refresh custom data type* endpoint refreshes the specified custom data type for a given company. This is an asynchronous operation that will sync updated data from the linked integration into Codat for you to view.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="refresh-custom-data-type" method="post" path="/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.refresh({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeRefresh } from "@codat/platform/funcs/customDataTypeRefresh.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeRefresh(codatPlatform, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeRefresh failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RefreshCustomDataTypeRequest](../../sdk/models/operations/refreshcustomdatatyperequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PullOperation](../../sdk/models/shared/pulloperation.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 401, 402, 403, 404, 429, 451 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## list

The *List custom data type records* endpoint returns a paginated list of records pulled for the specified custom data type you previously configured.

A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.s endpoint returns a paginated list of records whose schema is defined [Configure custom data type](https://docs.codat.io/platform-api#/operations/configure-custom-data-type)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-custom-data-type-records" method="get" path="/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.customDataType.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { customDataTypeList } from "@codat/platform/funcs/customDataTypeList.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customDataTypeList(codatPlatform, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customDataTypeList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomDataTypeRecordsRequest](../../sdk/models/operations/listcustomdatatyperecordsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CustomDataTypeRecords](../../sdk/models/shared/customdatatyperecords.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 404, 429, 451 | application/json                  |
| errors.ErrorMessage               | 500, 503                          | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |