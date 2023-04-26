# directCosts

## Overview

Direct costs

### Available Operations

* [createDirectCost](#createdirectcost) - Create direct cost
* [downloadDirectCostAttachment](#downloaddirectcostattachment) - Download direct cost attachment
* [getCreateDirectCostsModel](#getcreatedirectcostsmodel) - Get create direct cost model
* [getDirectCost](#getdirectcost) - Get direct cost
* [getDirectCostAttachment](#getdirectcostattachment) - Get direct cost attachment
* [getDirectCosts](#getdirectcosts) - List direct costs
* [listDirectCostAttachments](#listdirectcostattachments) - List direct cost attachments
* [uploadDirectCostAttachment](#uploaddirectcostattachment) - Upload direct cost attachment

## createDirectCost

Posts a new direct cost to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectCostRequest, CreateDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDirectCostRequest = {
  directCost: {
    contactRef: {
      dataType: "sed",
      id: "de35f8e0-1bf3-43ea-ab45-402ac1704bf1",
    },
    currency: "maxime",
    currencyRate: 8111.67,
    id: "9fc61aae-5eb5-4f0c-892b-5744d08a2267",
    issueDate: "est",
    lineItems: [
      {
        accountRef: {
          id: "ee79e3c7-1ad3-41be-8b83-d2378ae3bfc2",
          name: "Christie Marquardt",
        },
        description: "aperiam",
        discountAmount: 6589.17,
        discountPercentage: 6038.63,
        itemRef: {
          id: "86a495ba-c707-4f06-b28e-cc86492386f6",
          name: "Lynne Miller",
        },
        quantity: 7548.72,
        subTotal: 2765.07,
        taxAmount: 7900.8,
        taxRateRef: {
          effectiveTaxRate: 7977.92,
          id: "6b78890a-3fd3-4c81-9a10-f8c23df931da",
          name: "Henrietta Schuppe",
        },
        totalAmount: 1152.02,
        tracking: {
          invoiceTo: {
            dataType: "repellat",
            id: "ad94acc9-4351-4377-a6d1-5321b832a56d",
          },
          recordRefs: [
            {
              dataType: "sint",
              id: "180ff60e-b9a6-4658-a69a-4b843d382dbe",
            },
            {
              dataType: "porro",
              id: "75c68c60-6594-468c-a304-d8849bf8214c",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "37f96bb0-c69e-4372-9b13-44ba9f78a5c0",
            name: "Bryant Kiehn",
          },
        ],
        unitAmount: 7429.37,
      },
      {
        accountRef: {
          id: "62e97261-fb0c-458d-a7b5-1996b5b4b50e",
          name: "Mr. Darrin Kub",
        },
        description: "ducimus",
        discountAmount: 6577.63,
        discountPercentage: 4967.86,
        itemRef: {
          id: "ab0344b1-7106-488d-aebe-f897f3dd0ccd",
          name: "Mr. Cindy White",
        },
        quantity: 2054.73,
        subTotal: 9131.52,
        taxAmount: 3033.65,
        taxRateRef: {
          effectiveTaxRate: 9165.77,
          id: "080aa104-186e-4c75-9e02-f3702c5c8e2d",
          name: "Barbara Von",
        },
        totalAmount: 2133.99,
        tracking: {
          invoiceTo: {
            dataType: "sunt",
            id: "04fa4470-7bf3-475b-8428-2821fdb2f69e",
          },
          recordRefs: [
            {
              dataType: "unde",
              id: "267c71cc-8d3c-4d42-98d0-358a82c808fe",
            },
            {
              dataType: "odit",
              id: "751a2047-c044-49e1-83f9-619bb7d40d5a",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "1fa436e6-2592-433f-95c9-d237397c785b",
            name: "Betsy Reynolds",
          },
        ],
        unitAmount: 3401.67,
      },
      {
        accountRef: {
          id: "00183feb-df67-46b7-a06d-ab750052a564",
          name: "Gretchen Steuber",
        },
        description: "sequi",
        discountAmount: 6159.32,
        discountPercentage: 9053.57,
        itemRef: {
          id: "d8c4320f-4124-40d4-887a-c693b94c3b9d",
          name: "Esther Lind",
        },
        quantity: 4884.37,
        subTotal: 6008.1,
        taxAmount: 3215.82,
        taxRateRef: {
          effectiveTaxRate: 6383.23,
          id: "a42fc405-669f-469a-806d-21249450819d",
          name: "Krista Emard MD",
        },
        totalAmount: 3003.75,
        tracking: {
          invoiceTo: {
            dataType: "illo",
            id: "844060e0-0310-4d02-bdc9-01f5afd2a6c4",
          },
          recordRefs: [
            {
              dataType: "praesentium",
              id: "46ae9d89-253c-4896-af48-96bf51e4652d",
            },
            {
              dataType: "dolorem",
              id: "c343d617-78af-4491-a477-25e621909e91",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "44a5de59-ac77-4066-b0cf-1cf593260525",
            name: "Elvira Jacobson",
          },
        ],
        unitAmount: 7414,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "non",
    note: "quia",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "deleniti",
          currency: "molestias",
          currencyRate: 4937.34,
          totalAmount: 8134.63,
        },
        payment: {
          accountRef: {
            id: "99a2d335-670e-493e-a6cf-59f358aaeaca",
            name: "Philip Crooks",
          },
          currency: "adipisci",
          currencyRate: 799.07,
          id: "bf7ba1cc-9771-46c8-82cc-9e0c7d9d323f",
          note: "quae",
          paidOnDate: "animi",
          reference: "est",
          totalAmount: 4209.27,
        },
      },
      {
        allocation: {
          allocatedOnDate: "sequi",
          currency: "officiis",
          currencyRate: 8610.9,
          totalAmount: 5823.51,
        },
        payment: {
          accountRef: {
            id: "cf1c856b-cba5-41ef-a454-a47facf116cd",
            name: "Jorge Grady",
          },
          currency: "officia",
          currencyRate: 4413.58,
          id: "562873c7-dd9e-4faf-83dc-623620f3138f",
          note: "nesciunt",
          paidOnDate: "doloremque",
          reference: "at",
          totalAmount: 9458.52,
        },
      },
    ],
    reference: "sequi",
    sourceModifiedDate: "temporibus",
    subTotal: 7364.8,
    supplementalData: {
      content: {
        "magni": {
          "earum": "similique",
        },
      },
    },
    taxAmount: 6633.25,
    totalAmount: 3507.98,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 415121,
};

sdk.directCosts.createDirectCost(req).then((res: CreateDirectCostResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadDirectCostAttachment

Downloads an attachment for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectCostAttachmentRequest, DownloadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadDirectCostAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.downloadDirectCostAttachment(req).then((res: DownloadDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateDirectCostsModel

Get create direct cost model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectCostsModelRequest, GetCreateDirectCostsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateDirectCostsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.directCosts.getCreateDirectCostsModel(req).then((res: GetCreateDirectCostsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDirectCost

Gets the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostRequest, GetDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectCostRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.getDirectCost(req).then((res: GetDirectCostResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDirectCostAttachment

Gets the specified direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostAttachmentRequest, GetDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectCostAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.getDirectCostAttachment(req).then((res: GetDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDirectCosts

Gets the direct costs for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostsRequest, GetDirectCostsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectCostsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nostrum",
};

sdk.directCosts.getDirectCosts(req).then((res: GetDirectCostsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listDirectCostAttachments

Gets all attachments for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostAttachmentsRequest, ListDirectCostAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListDirectCostAttachmentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.listDirectCostAttachments(req).then((res: ListDirectCostAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadDirectCostAttachment

Posts a new direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadDirectCostAttachmentRequest, UploadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadDirectCostAttachmentRequest = {
  requestBody: {
    content: "delectus".encode(),
    requestBody: "quidem",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.uploadDirectCostAttachment(req).then((res: UploadDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
