# createPayment
Available in: `payments`

Posts a new payment to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create payment model](https://docs.codat.io/accounting-api#/operations/get-create-payments-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating payments.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePaymentRequest, CreatePaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PaymentLinkTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePaymentRequest = {
  payment: {
    accountRef: {
      id: "60629451-4c3d-4b9c-a9f3-8bd2be878703",
      name: "Cora Ferry",
    },
    currency: "provident",
    currencyRate: 6660.49,
    customerRef: {
      companyName: "mollitia",
      id: "8465a328-3279-4b71-9d1c-ea673d86e3b3",
    },
    date: "2022-10-23T00:00:00Z",
    id: "5e49a313-5778-4ce5-8cac-b0e3ea975045",
    lines: [
      {
        allocatedOnDate: "2022-10-23T00:00:00Z",
        amount: 6257.74,
        links: [
          {
            amount: 9916.87,
            currencyRate: 4113.08,
            id: "3b215186-ab5e-43a0-a261-4315d1568299",
            type: PaymentLinkTypeEnum.Discount,
          },
          {
            amount: 3778.77,
            currencyRate: 1003.06,
            id: "afc7186f-f20b-47a7-bdf4-0ca0d7657c16",
            type: PaymentLinkTypeEnum.Invoice,
          },
          {
            amount: 698.78,
            currencyRate: 7166.01,
            id: "bf055271-b251-41dd-a06d-d1b28272bc9c",
            type: PaymentLinkTypeEnum.Unlinked,
          },
          {
            amount: 1694.68,
            currencyRate: 1257.69,
            id: "1697b188-0fcb-4b2b-93c1-5f670bd17848",
            type: PaymentLinkTypeEnum.Unlinked,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00Z",
        amount: 1228.58,
        links: [
          {
            amount: 3516.07,
            currencyRate: 2234.48,
            id: "eeb3b6e2-41c3-4109-9836-63c66dcbb7df",
            type: PaymentLinkTypeEnum.CreditNote,
          },
          {
            amount: 7852.92,
            currencyRate: 7427.38,
            id: "09c8b408-e071-4377-8de4-fee101d9780a",
            type: PaymentLinkTypeEnum.Unlinked,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00Z",
        amount: 434.45,
        links: [
          {
            amount: 2602.42,
            currencyRate: 4839.58,
            id: "b95040d6-c8b2-4a5f-8022-07e4048f9000",
            type: PaymentLinkTypeEnum.Payment,
          },
          {
            amount: 9351.45,
            currencyRate: 8479.43,
            id: "290278eb-4ae9-4d64-961e-91500323b2c0",
            type: PaymentLinkTypeEnum.Refund,
          },
          {
            amount: 7176.59,
            currencyRate: 6050.35,
            id: "24771f56-69e5-4b7e-8762-6649d84eb9e4",
            type: PaymentLinkTypeEnum.PaymentOnAccount,
          },
          {
            amount: 9525.87,
            currencyRate: 8696.62,
            id: "2276e0b8-8fb8-47d6-ba5b-6e8dbf812f83",
            type: PaymentLinkTypeEnum.PaymentOnAccount,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "inventore",
    paymentMethodRef: {
      id: "ca6a9ffc-5619-429c-8a95-60a1395918da",
      name: "Hope Gusikowski",
    },
    reference: "nihil",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    supplementalData: {
      content: {
        "officiis": {
          "quisquam": "asperiores",
        },
        "praesentium": {
          "inventore": "ab",
          "dolore": "amet",
          "nulla": "officia",
          "natus": "nesciunt",
        },
        "eaque": {
          "nobis": "magni",
          "nihil": "laborum",
          "aut": "voluptatum",
        },
      },
    },
    totalAmount: 6542.99,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 969433,
};

sdk.payments.createPayment(req).then((res: CreatePaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```