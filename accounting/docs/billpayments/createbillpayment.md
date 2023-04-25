# createBillPayment
Available in: `billPayments`

Posts a new bill payment to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create bill payment model](https://docs.codat.io/accounting-api#/operations/get-create-billPayments-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating bill payments.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillPaymentRequest, CreateBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillPaymentLineLinkTypeEnum,
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

const req: CreateBillPaymentRequest = {
  billPayment: {
    accountRef: {
      id: "825c1fc0-e115-4c80-bff9-18544ec42def",
      name: "Gregg Torp",
    },
    currency: "ab",
    currencyRate: 5734.44,
    date: "2022-10-23T00:00:00Z",
    id: "77773e63-562a-47b4-88f0-5e3d48fdaf31",
    lines: [
      {
        allocatedOnDate: "2022-10-23T00:00:00Z",
        amount: 6308.32,
        links: [
          {
            amount: 9979.95,
            currencyRate: 3632.14,
            id: "fd94259c-0b36-4f25-aa94-4f3b756c11f6",
            type: BillPaymentLineLinkTypeEnum.Refund,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "dolor",
    paymentMethodRef: {
      id: "7a512624-3835-4bbc-85a2-3a45cefc5fde",
      name: "Miss Linda Nader",
    },
    reference: "quia",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    supplementalData: {
      content: {
        "vel": {
          "debitis": "ullam",
          "architecto": "accusantium",
          "perferendis": "veritatis",
        },
      },
    },
    supplierRef: {
      id: "9c6dc5e3-4762-4799-bfbb-e6949fb2bb4e",
      supplierName: "quod",
    },
    totalAmount: 6646.66,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 904440,
};

sdk.billPayments.createBillPayment(req).then((res: CreateBillPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```