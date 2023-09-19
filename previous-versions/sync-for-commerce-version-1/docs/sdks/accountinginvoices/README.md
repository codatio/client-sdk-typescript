# AccountingInvoices

## Overview

Invoices

### Available Operations

* [createAccountingInvoice](#createaccountinginvoice) - Create invoice

## createAccountingInvoice

The *Create invoice* endpoint creates a new [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) for a given company's connection.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingInvoiceResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";
import { BilledToType, InvoiceStatus } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingInvoices.createAccountingInvoice({
  accountingInvoice: {
    additionalTaxAmount: 7386.83,
    additionalTaxPercentage: 2326.27,
    amountDue: 4490.83,
    currency: "USD",
    currencyRate: 9372.85,
    customerRef: {
      companyName: "facere",
      id: "4f6fbee4-1f33-4317-be35-b60eb1ea4265",
    },
    discountPercentage: 3742.96,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "ba3c2874-4ed5-43b8-8f3a-8d8f5c0b2f2f",
    invoiceNumber: "facilis",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "b194a276-b269-416f-a1f0-8f4294e3698f",
          name: "Rhonda Klocko",
        },
        description: "sit",
        discountAmount: 2484.13,
        discountPercentage: 8880.44,
        isDirectIncome: false,
        itemRef: {
          id: "8b445e80-ca55-4efd-a0e4-57e1858b6a89",
          name: "Rudolph Trantow",
        },
        quantity: 3416.98,
        subTotal: 6390.28,
        taxAmount: 6762.43,
        taxRateRef: {
          effectiveTaxRate: 5483.61,
          id: "e4824d0a-b407-4508-8e51-862065e904f3",
          name: "Gerald Bradtke",
        },
        totalAmount: 6952.7,
        tracking: {
          categoryRefs: [
            {
              id: "8abf603a-79f9-4dfe-8ab7-da8a50ce187f",
              name: "Sam Powlowski IV",
            },
          ],
          customerRef: {
            companyName: "amet",
            id: "d689eee9-526f-48d9-86e8-81ead4f0e101",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "63f94e29-e973-4e92-aa57-a15be3e06080",
            name: "Tricia Denesik",
          },
          recordRef: {
            dataType: "transfer",
            id: "3ab8845f-0597-4a60-bf2a-54a31e94764a",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3e865e79-56f9-4251-a5a9-da660ff57bfa",
            name: "Irving Gleichner",
          },
        ],
        unitAmount: 8897.94,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "cumque",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 3354.98,
          totalAmount: 820.57,
        },
        payment: {
          accountRef: {
            id: "2c103264-8dc2-4f61-9199-ebfd0e9fe6c6",
            name: "Denise Runolfsdottir",
          },
          currency: "USD",
          currencyRate: 8987.6,
          id: "d0117996-312f-4de0-8771-778ff61d0174",
          note: "esse",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "consectetur",
          totalAmount: 3998.12,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "ipsa",
        id: "a15db6a6-6065-49a1-adea-ab5851d6c645",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Unknown,
    subTotal: 5615.77,
    supplementalData: {
      content: {
        "cum": {
          "aliquid": "beatae",
        },
      },
    },
    totalAmount: 5308.6,
    totalDiscount: 6063.08,
    totalTaxAmount: 852.33,
    withholdingTax: [
      {
        amount: 7032.18,
        name: "Trevor Bartell",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 103298,
}).then((res: CreateAccountingInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateAccountingInvoiceRequest](../../models/operations/createaccountinginvoicerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateAccountingInvoiceResponse](../../models/operations/createaccountinginvoiceresponse.md)>**

