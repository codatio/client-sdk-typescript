# pushData

## Overview

View push options and get push statuses.

### Available Operations

* [getModelOptions](#getmodeloptions) - Get push options
* [getOperation](#getoperation) - Get push operation
* [listOperations](#listoperations) - List push operations

## getModelOptions

This is the generic documentation for creation and updating of data. See the equivalent endpoint for a given data type for more specific information. 

Before pushing data into accounting software, it is often necessary to collect some details from the user as to how they would like the data to be inserted. This includes names and amounts on transactional entities, but also factors such as categorisation of entities, which is often handled differently between different accounting packages. A good example of this is specifying where on the balance sheet/profit and loss reports the user would like a newly-created nominal account to appear.

Codat tries not to limit users to pushing to a very limited number of standard categories, so we have implemented "options" endpoints, which allow us to expose to our clients the fields which are required to be pushed for a specific linked company, and the options which may be selected for each field.


> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/) for integrations that support push (POST/PUT methods).

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCreateUpdateModelOptionsByDataTypeResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, PushOptionType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pushData.getModelOptions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  dataType: DataType.Invoices,
}).then((res: GetCreateUpdateModelOptionsByDataTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOperation

Retrieve push operation.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetPushOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pushData.getOperation({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "4e0f467c-c879-46ed-951a-05dfc2ddf7cc",
}).then((res: GetPushOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listOperations

List push operation records.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyPushHistoryResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pushData.listOperations({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "esse",
}).then((res: GetCompanyPushHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
