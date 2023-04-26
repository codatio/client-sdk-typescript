# bills

## Overview

Bills

### Available Operations

* [createBill](#createbill) - Create bill
* [deleteBill](#deletebill) - Delete bill
* [downloadBillAttachment](#downloadbillattachment) - Download bill attachment
* [getBill](#getbill) - Get bill
* [getBillAttachment](#getbillattachment) - Get bill attachment
* [getBillAttachments](#getbillattachments) - List bill attachments
* [getCreateUpdateBillsModel](#getcreateupdatebillsmodel) - Get create/update bill model
* [listBills](#listbills) - List bills
* [updateBill](#updatebill) - Update bill
* [uploadBillAttachments](#uploadbillattachments) - Upload bill attachments

## createBill

Posts a new bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillRequest, CreateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum,
  BillStatusEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBillRequest = {
  bill: {
    amountDue: 941.22,
    currency: "rem",
    currencyRate: 4935.79,
    dueDate: "doloremque",
    id: "d9d21f9a-d030-4c4e-8c11-a0836429068b",
    issueDate: "laudantium",
    lineItems: [
      {
        accountRef: {
          id: "02a55e7f-73bc-4845-a320-a319f4badf94",
          name: "Pat Mueller",
        },
        description: "aliquid",
        discountAmount: 4693.84,
        discountPercentage: 7063.28,
        isDirectCost: false,
        itemRef: {
          id: "c4242666-5816-4ddc-a8ef-51fcb4c593ec",
          name: "Beverly Satterfield",
        },
        quantity: 6615.78,
        subTotal: 8409.92,
        taxAmount: 590.23,
        taxRateRef: {
          effectiveTaxRate: 8792.08,
          id: "c7afedbd-80df-4448-a47f-9390c5888098",
          name: "Eula Paucek",
        },
        totalAmount: 6229.68,
        tracking: {
          categoryRefs: [
            {
              id: "f3ffdd9f-7f07-49af-8d35-724cdb0f4d28",
              name: "Alice Langosh",
            },
            {
              id: "56844ede-d85a-4906-9e62-8bdfc2032b6c",
              name: "Cody Mohr",
            },
            {
              id: "3b7e1358-4f7a-4e12-8689-1f82ce115717",
              name: "Dawn Bechtelar",
            },
            {
              id: "77dcfa89-df97-45e3-9668-6092e9c3ddc5",
              name: "Dr. Jack Buckridge",
            },
          ],
          customerRef: {
            companyName: "laborum",
            id: "1026d541-a4d1-490f-ab21-780bccc0dbbd",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Customer,
          projectRef: {
            id: "484708fb-4e39-41e6-bc15-8c4c4e54599e",
            name: "Jeffery Glover",
          },
        },
        trackingCategoryRefs: [
          {
            id: "0e9b200c-e78a-41bd-8fb7-a0a116ce723d",
            name: "Susan Mraz",
          },
          {
            id: "a30e9af7-25b2-4912-a030-d83f5aeb7799",
            name: "Nicholas Conroy",
          },
        ],
        unitAmount: 7607.93,
      },
      {
        accountRef: {
          id: "1f849382-5fdc-442c-876c-2c2dfb4cfc1c",
          name: "Sue Christiansen DVM",
        },
        description: "quos",
        discountAmount: 2563.1,
        discountPercentage: 1138.94,
        isDirectCost: false,
        itemRef: {
          id: "fb1bd23f-db14-4db6-be5a-685998e22ae2",
          name: "Ms. Lora Olson",
        },
        quantity: 7912.82,
        subTotal: 1489.58,
        taxAmount: 7211.98,
        taxRateRef: {
          effectiveTaxRate: 1554.73,
          id: "71a289c5-7e85-44e9-8439-d22246569462",
          name: "Ms. Sharon Kuhlman",
        },
        totalAmount: 9624.11,
        tracking: {
          categoryRefs: [
            {
              id: "ab37cef0-2225-4194-9b55-410adc669af9",
              name: "Sandy Considine",
            },
            {
              id: "7cdc981f-0689-481d-abb3-3cfaa348c31b",
              name: "Oscar Beatty",
            },
          ],
          customerRef: {
            companyName: "necessitatibus",
            id: "4fcf0c42-b78f-4156-a639-8a0dc766324c",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Customer,
          projectRef: {
            id: "06c8ca12-d025-4292-b0b8-d5722dd895b8",
            name: "Guadalupe Wisoky",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b9596933-52f7-4453-b994-d78de3b6e938",
            name: "Courtney Hermann",
          },
          {
            id: "b7f66255-0a28-4382-ac48-3afd2315bba6",
            name: "Helen Blick",
          },
          {
            id: "e06f5bf6-ae59-41bc-8bde-f3612b63c205",
            name: "Bryant Ondricka",
          },
          {
            id: "0774a68a-9a35-4d08-ab6f-66fef020e9f4",
            name: "Ethel Robel",
          },
        ],
        unitAmount: 3184.03,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "nihil",
    note: "libero",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "excepturi",
          currency: "eos",
          currencyRate: 7890.36,
          totalAmount: 5471.84,
        },
        payment: {
          accountRef: {
            id: "dbda6a61-efa2-4198-a58f-d0a9eba47f7d",
            name: "Mrs. Tasha Wilkinson",
          },
          currency: "aliquid",
          currencyRate: 2946.5,
          id: "0d6a1831-c87a-4df5-96fd-f1ad837ae80c",
          note: "vitae",
          paidOnDate: "cumque",
          reference: "architecto",
          totalAmount: 5754.04,
        },
      },
      {
        allocation: {
          allocatedOnDate: "eligendi",
          currency: "occaecati",
          currencyRate: 3396.51,
          totalAmount: 7343.61,
        },
        payment: {
          accountRef: {
            id: "a998678f-a3f6-4969-91af-388ce0361444",
            name: "Sylvester Kling",
          },
          currency: "reprehenderit",
          currencyRate: 6541.99,
          id: "0ef2f536-028e-4fee-b934-152ed7e253f4",
          note: "quod",
          paidOnDate: "sunt",
          reference: "ullam",
          totalAmount: 4630.44,
        },
      },
      {
        allocation: {
          allocatedOnDate: "illum",
          currency: "voluptates",
          currencyRate: 6410.06,
          totalAmount: 6687.83,
        },
        payment: {
          accountRef: {
            id: "7170f445-accf-4667-aaf9-bbad185fe431",
            name: "Rick Predovic",
          },
          currency: "cumque",
          currencyRate: 5291.74,
          id: "38fbb8c2-0cb6-47fc-8b42-5e99e6234c9f",
          note: "voluptate",
          paidOnDate: "tempore",
          reference: "in",
          totalAmount: 6098.64,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "feb77a5c-38d4-4baf-91e5-06ef890a54b4",
        purchaseOrderNumber: "odio",
      },
      {
        id: "5f16f56d-385a-43c4-ac63-1b99e26ced8f",
        purchaseOrderNumber: "natus",
      },
      {
        id: "fdb9410f-63bb-4f81-b837-b01afdd78862",
        purchaseOrderNumber: "labore",
      },
      {
        id: "189eb448-73f5-4033-b19d-bf125ce4152e",
        purchaseOrderNumber: "error",
      },
    ],
    reference: "expedita",
    sourceModifiedDate: "error",
    status: BillStatusEnum.Void,
    subTotal: 8382.27,
    supplementalData: {
      content: {
        "earum": {
          "odit": "odit",
          "eius": "error",
        },
        "vel": {
          "alias": "itaque",
          "ab": "sunt",
          "amet": "cum",
        },
      },
    },
    supplierRef: {
      id: "7847ec59-e1f6-47f3-84cc-e4b6d7696ff3",
      supplierName: "eligendi",
    },
    taxAmount: 3534.24,
    totalAmount: 4713.15,
    withholdingTax: [
      {
        amount: 4895.97,
        name: "Margaret Bradtke",
      },
      {
        amount: 4713.02,
        name: "Micheal Gusikowski",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 115522,
};

sdk.bills.createBill(req).then((res: CreateBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteBill

Deletes a bill from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our Oracle NetSuite and QuickBooks Online integrations. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillRequest, DeleteBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteBillRequest = {
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bills.deleteBill(req).then((res: DeleteBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadBillAttachment

Download bill attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadBillAttachmentRequest, DownloadBillAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadBillAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bills.downloadBillAttachment(req).then((res: DownloadBillAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBill

Get bill

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillRequest, GetBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillRequest = {
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.bills.getBill(req).then((res: GetBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBillAttachment

Get bill attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillAttachmentRequest, GetBillAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bills.getBillAttachment(req).then((res: GetBillAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBillAttachments

Get bill attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillAttachmentsRequest, GetBillAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillAttachmentsRequest = {
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bills.getBillAttachments(req).then((res: GetBillAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateBillsModel

Get create/update bill model.

 > **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBillsModelRequest, GetCreateUpdateBillsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateBillsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bills.getCreateUpdateBillsModel(req).then((res: GetCreateUpdateBillsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listBills

Gets the latest bills for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillsRequest, ListBillsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBillsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "hic",
};

sdk.bills.listBills(req).then((res: ListBillsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateBill

Posts an updated bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support updating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillRequest, UpdateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum,
  BillStatusEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateBillRequest = {
  bill: {
    amountDue: 5055.58,
    currency: "libero",
    currencyRate: 99.12,
    dueDate: "totam",
    id: "4c3197e1-93a2-4454-a7f9-4874c2d5cc49",
    issueDate: "ducimus",
    lineItems: [
      {
        accountRef: {
          id: "233e66bd-8fe5-4d00-b979-ef2038732059",
          name: "Pat Schmitt Jr.",
        },
        description: "perspiciatis",
        discountAmount: 4069.46,
        discountPercentage: 2622.31,
        isDirectCost: false,
        itemRef: {
          id: "00313b3e-5044-4f65-be72-dc4077d0cc3f",
          name: "Carol Lowe",
        },
        quantity: 7738.54,
        subTotal: 1199.28,
        taxAmount: 3588.61,
        taxRateRef: {
          effectiveTaxRate: 7720.62,
          id: "eb4d6e1e-ae0f-475a-adf2-acab58b991c9",
          name: "Jeanette Schultz",
        },
        totalAmount: 3130.99,
        tracking: {
          categoryRefs: [
            {
              id: "9461e742-1cbe-46d9-902f-0ea930b69f7a",
              name: "Carlos Wunsch DVM",
            },
            {
              id: "88500904-9116-4082-8788-8ec66183bfe9",
              name: "Marion Mills",
            },
            {
              id: "40ec16fa-f75b-40b5-b2a4-da37cbaaf445",
              name: "Bernadette Hahn",
            },
          ],
          customerRef: {
            companyName: "explicabo",
            id: "c9b2ad32-dafe-481a-88f4-444573fecd47",
          },
          isBilledTo: BilledToTypeEnum.Unknown,
          isRebilledTo: BilledToTypeEnum.NotApplicable,
          projectRef: {
            id: "3f63c820-9379-4aa6-9cd5-fbcf79da18a7",
            name: "Martin Daugherty",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5894e686-1adb-455f-9e5d-751c9fe8f750",
            name: "Susie Wolf",
          },
          {
            id: "3450841f-1764-4456-b79f-3fb27e21f862",
            name: "Ida Kihn",
          },
          {
            id: "6fc6b9f5-87ce-4525-8676-41a8312e5047",
            name: "Mario Runolfsson DDS",
          },
        ],
        unitAmount: 7678.8,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "distinctio",
    note: "numquam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "amet",
          currency: "culpa",
          currencyRate: 7057.53,
          totalAmount: 7925.55,
        },
        payment: {
          accountRef: {
            id: "dc91faab-dd88-4e71-b6c4-8252d7771e7f",
            name: "Thomas Kirlin Jr.",
          },
          currency: "iste",
          currencyRate: 8814.13,
          id: "f8d29de1-dd70-497b-9da0-8c57fa6c78a2",
          note: "architecto",
          paidOnDate: "ea",
          reference: "accusamus",
          totalAmount: 768.73,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "bafeca61-9149-4814-8b64-ff8ae170ef03",
        purchaseOrderNumber: "distinctio",
      },
      {
        id: "5f37e4aa-8685-4559-a673-2aa5dcb6682c",
        purchaseOrderNumber: "expedita",
      },
      {
        id: "70f8cfd5-fb6e-491b-9a9f-74846e2c3309",
        purchaseOrderNumber: "repellendus",
      },
    ],
    reference: "soluta",
    sourceModifiedDate: "aut",
    status: BillStatusEnum.PartiallyPaid,
    subTotal: 2271.85,
    supplementalData: {
      content: {
        "quibusdam": {
          "voluptates": "nihil",
          "ad": "eligendi",
          "fuga": "consequatur",
        },
        "sit": {
          "earum": "quis",
          "dolorem": "omnis",
        },
      },
    },
    supplierRef: {
      id: "2c11a25a-8bf9-42f9-b428-ad9a9f8bf822",
      supplierName: "illo",
    },
    taxAmount: 1037.6,
    totalAmount: 1541.17,
    withholdingTax: [
      {
        amount: 2449.9,
        name: "Sherri Schuster",
      },
      {
        amount: 2326.02,
        name: "Lance Zieme",
      },
    ],
  },
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 453111,
};

sdk.bills.updateBill(req).then((res: UpdateBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadBillAttachments

Upload bill attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadBillAttachmentsRequest, UploadBillAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadBillAttachmentsRequest = {
  requestBody: {
    content: "cupiditate".encode(),
    requestBody: "maxime",
  },
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bills.uploadBillAttachments(req).then((res: UploadBillAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
