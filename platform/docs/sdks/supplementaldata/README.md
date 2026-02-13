# SupplementalData

## Overview

Configure and pull additional data you can include in Codat's standard data types.

### Available Operations

* [configure](#configure) - Configure
* [getConfiguration](#getconfiguration) - Get configuration

## configure

The *Configure* endpoint allows you to maintain or change configuration required to return supplemental data for each integration and data type combination.

[Supplemental data](https://docs.codat.io/using-the-api/supplemental-data/overview) is additional data you can include in Codat's standard data types.

**Integration-specific behavior**
See the *examples* for integration-specific frequently requested properties.

### Example Usage: QBO - Customers

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="QBO - Customers" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: QBO - Invoices

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="QBO - Invoices" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Unauthorized

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="Unauthorized" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {
      supplementalDataConfig: {
        "orders-supplemental-data": {
          dataSource: "/orders",
          pullData: {
            "orderNumber": "order_num",
          },
          pushData: {
            "orderNumber": "order_num",
          },
        },
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {
      supplementalDataConfig: {
        "orders-supplemental-data": {
          dataSource: "/orders",
          pullData: {
            "orderNumber": "order_num",
          },
          pushData: {
            "orderNumber": "order_num",
          },
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero - Accounts

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="Xero - Accounts" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero - Contacts

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="Xero - Contacts" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero - Invoices

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="Xero - Invoices" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero - Items

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="Xero - Items" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```
### Example Usage: Xero - Tax rates

<!-- UsageSnippet language="typescript" operationID="configure-supplemental-data" method="put" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" example="Xero - Tax rates" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.supplementalData.configure({
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataConfigure } from "@codat/platform/funcs/supplementalDataConfigure.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataConfigure(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
    supplementalDataConfiguration: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("supplementalDataConfigure failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConfigureSupplementalDataRequest](../../sdk/models/operations/configuresupplementaldatarequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getConfiguration

The *Get configuration* endpoint returns supplemental data configuration previously created for each integration and data type combination.

[Supplemental data](https://docs.codat.io/using-the-api/supplemental-data/overview) is additional data you can include in Codat's standard data types.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-supplemental-data-configuration" method="get" path="/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig" -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.supplementalData.getConfiguration({
    platformKey: "gbol",
    dataType: "invoices",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { supplementalDataGetConfiguration } from "@codat/platform/funcs/supplementalDataGetConfiguration.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await supplementalDataGetConfiguration(codatPlatform, {
    platformKey: "gbol",
    dataType: "invoices",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("supplementalDataGetConfiguration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSupplementalDataConfigurationRequest](../../sdk/models/operations/getsupplementaldataconfigurationrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.SupplementalDataConfiguration](../../sdk/models/shared/supplementaldataconfiguration.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |