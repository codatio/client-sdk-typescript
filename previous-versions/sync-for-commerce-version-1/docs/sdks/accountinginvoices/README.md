# accountingInvoices

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
    additionalTaxAmount: 7031.89,
    additionalTaxPercentage: 841.78,
    amountDue: 9492.8,
    currency: "USD",
    currencyRate: 6940.88,
    customerRef: {
      companyName: "totam",
      id: "ca275a60-a04c-4495-8c69-9171b51c1bdb",
    },
    discountPercentage: 1053.72,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "f4b888eb-dfc4-4ccc-a99b-c7fc0b2dce10",
    invoiceNumber: "laudantium",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "e42b006d-6788-478b-a858-1a58208c54fe",
          name: "Gerard Mraz",
        },
        description: "quaerat",
        discountAmount: 9853.79,
        discountPercentage: 1560.98,
        isDirectIncome: false,
        itemRef: {
          id: "eac5565d-307c-4fee-8120-6e2813fa4a41",
          name: "Dr. Herbert Legros",
        },
        quantity: 9998.54,
        subTotal: 1323.05,
        taxAmount: 802.84,
        taxRateRef: {
          effectiveTaxRate: 1932.36,
          id: "2af03102-d514-4f4c-86f1-8bf9621a6a4f",
          name: "Tamara O'Kon",
        },
        totalAmount: 9085.39,
        tracking: {
          categoryRefs: [
            {
              id: "3e4be752-c65b-4344-98e3-bb91c8d975e0",
              name: "Miss Dwight Goldner",
            },
            {
              id: "8f84f144-f3e0-47ed-8c4a-a5f3cabd905a",
              name: "Mitchell Crona II",
            },
            {
              id: "6728227b-2d30-4947-8bf7-a4fa87cf535a",
              name: "Ora Okuneva",
            },
            {
              id: "4ebf60c3-21f0-423b-b5d2-367fe1a0cc8d",
              name: "Darren McKenzie V",
            },
          ],
          customerRef: {
            companyName: "nesciunt",
            id: "96d90c36-4b7c-415d-bbac-e188b1c4ee2c",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "6ce611fe-eb1c-47cb-9b6e-ec74378ba253",
            name: "Heidi Koch",
          },
          recordRef: {
            dataType: "transfer",
            id: "c915ad2c-af5d-4d67-a3dc-0f5ae2f3a6b7",
          },
        },
        trackingCategoryRefs: [
          {
            id: "08787561-43f5-4a6c-98b5-5554080d40bc",
            name: "Gregg Russel",
          },
        ],
        unitAmount: 7437.95,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "laboriosam",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 8988.26,
          totalAmount: 8037.92,
        },
        payment: {
          accountRef: {
            id: "909304f9-26ba-4d25-9381-9b474b0ed20e",
            name: "Terri Davis",
          },
          currency: "EUR",
          currencyRate: 9806.49,
          id: "f639a910-abdc-4ab6-a676-696e1ec00221",
          note: "quidem",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "amet",
          totalAmount: 3466.08,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 6016.26,
          totalAmount: 6294.61,
        },
        payment: {
          accountRef: {
            id: "cb3ecfda-8d0c-4549-af03-004978a61fa1",
            name: "Ms. Darnell Denesik",
          },
          currency: "USD",
          currencyRate: 9456.37,
          id: "77c1ffc7-1dca-4163-b2a3-c80a97ff334c",
          note: "illum",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "tenetur",
          totalAmount: 5620.66,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "esse",
        id: "a9e61876-c6ab-421d-a9df-c94d6fecd799",
      },
      {
        dataType: "dolor",
        id: "90066a6d-2d00-4035-9338-cec086fa21e9",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Submitted,
    subTotal: 1631.81,
    supplementalData: {
      content: {
        "quidem": {
          "beatae": "sunt",
        },
        "molestias": {
          "autem": "ducimus",
        },
        "libero": {
          "necessitatibus": "ipsum",
          "impedit": "quos",
          "illum": "distinctio",
        },
        "voluptatem": {
          "quaerat": "consequatur",
        },
      },
    },
    totalAmount: 5154.33,
    totalDiscount: 8310.67,
    totalTaxAmount: 4159.53,
    withholdingTax: [
      {
        amount: 2312.55,
        name: "Michele Wehner",
      },
      {
        amount: 2941.81,
        name: "Ms. Samantha Metz",
      },
      {
        amount: 1168.67,
        name: "Gertrude Doyle",
      },
      {
        amount: 5231.09,
        name: "Alejandro DuBuque",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 175803,
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

