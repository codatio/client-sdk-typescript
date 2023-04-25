# updateBill
Available in: `bills`

Posts an updated bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support updating a bill.

## Example Usage
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
    amountDue: 3642.84,
    currency: "delectus",
    currencyRate: 8484.39,
    dueDate: "2022-10-23T00:00:00Z",
    id: "c42c876c-2c2d-4fb4-8fc1-c76230f841fb",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "bd23fdb1-4db6-4be5-a685-998e22ae20da",
          name: "Lucy Wilkinson",
        },
        description: "nam",
        discountAmount: 1554.73,
        discountPercentage: 4801.08,
        isDirectCost: false,
        itemRef: {
          id: "1a289c57-e854-4e90-839d-222465694624",
          name: "Viola Bailey",
        },
        quantity: 9624.11,
        subTotal: 4618.53,
        taxAmount: 6759.55,
        taxRateRef: {
          effectiveTaxRate: 7262.44,
          id: "37cef022-2519-44db-9541-0adc669af90a",
          name: "Stacey Satterfield",
        },
        totalAmount: 8149.5,
        tracking: {
          categoryRefs: [
            {
              id: "981f0689-81d6-4bb3-bcfa-a348c31bf407",
              name: "Santiago Fritsch",
            },
            {
              id: "f0c42b78-f156-4263-98a0-dc766324ccb0",
              name: "Leticia Leannon",
            },
            {
              id: "12d02529-270b-48d5-b22d-d895b8bcf24d",
              name: "Kent Hickle",
            },
            {
              id: "93352f74-5339-494d-b8de-3b6e9389f5ab",
              name: "Harvey Wisoky",
            },
          ],
          customerRef: {
            companyName: "fugit",
            id: "550a2838-2ac4-483a-bd23-15bba650164e",
          },
          isBilledTo: BilledToTypeEnum.Unknown,
          isRebilledTo: BilledToTypeEnum.NotApplicable,
          projectRef: {
            id: "f5bf6ae5-91bc-48bd-af36-12b63c205fda",
            name: "Alex Bayer",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a68a9a35-d086-4b6f-a6fe-f020e9f443b4",
            name: "Erin Kozey",
          },
          {
            id: "92c8dbda-6a61-4efa-a198-258fd0a9eba4",
            name: "Shari Konopelski",
          },
        ],
        unitAmount: 9156.53,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "a",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "quaerat",
          currencyRate: 5698.72,
          totalAmount: 3999.46,
        },
        payment: {
          accountRef: {
            id: "40d6a183-1c87-4adf-996f-df1ad837ae80",
            name: "Ms. Terry Runolfsson",
          },
          currency: "occaecati",
          currencyRate: 3396.51,
          id: "ba998678-fa3f-4696-991a-f388ce036144",
          note: "modi",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "quos",
          totalAmount: 7914.54,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "977a0ef2-f536-4028-afee-f934152ed7e2",
        purchaseOrderNumber: "ullam",
      },
      {
        id: "3f4c157d-eaa7-4170-b445-accf667aaf9b",
        purchaseOrderNumber: "tempore",
      },
    ],
    reference: "culpa",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: BillStatusEnum.Draft,
    subTotal: 780.74,
    supplementalData: {
      content: {
        "ad": {
          "voluptates": "ut",
          "nesciunt": "ab",
          "quibusdam": "suscipit",
          "quidem": "delectus",
        },
        "nemo": {
          "voluptatum": "sequi",
          "atque": "maiores",
          "expedita": "rerum",
          "totam": "quod",
        },
        "aspernatur": {
          "impedit": "nam",
        },
      },
    },
    supplierRef: {
      id: "67fc4b42-5e99-4e62-b4c9-f7b79dfeb77a",
      supplierName: "ad",
    },
    taxAmount: 8010.59,
    totalAmount: 1887.05,
    withholdingTax: [
      {
        amount: 8736.81,
        name: "Candice Nienow",
      },
      {
        amount: 752.03,
        name: "Ronnie Bechtelar",
      },
      {
        amount: 9625.43,
        name: "Eduardo Armstrong",
      },
    ],
  },
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 270862,
};

sdk.bills.updateBill(req).then((res: UpdateBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```