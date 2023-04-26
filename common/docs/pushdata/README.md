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
> Check out our [Knowledge UI](https://knowledge.codat.io/) for integrations that support push (POST/PUT methods).

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import {
  GetCreateUpdateModelOptionsByDataTypeRequest,
  GetCreateUpdateModelOptionsByDataTypeResponse,
} from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, PushOptionTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateModelOptionsByDataTypeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  dataType: DataTypeEnum.Invoices,
};

sdk.pushData.getModelOptions(req).then((res: GetCreateUpdateModelOptionsByDataTypeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getOperation

Retrieve push operation.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetPushOperationRequest, GetPushOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPushOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
};

sdk.pushData.getOperation(req).then((res: GetPushOperationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listOperations

List push operation records.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyPushHistoryRequest, GetCompanyPushHistoryResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyPushHistoryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "impedit",
};

sdk.pushData.listOperations(req).then((res: GetCompanyPushHistoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
