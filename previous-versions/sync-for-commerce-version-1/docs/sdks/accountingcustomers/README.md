# AccountingCustomers

## Overview

Customers

### Available Operations

* [createAccountingCustomer](#createaccountingcustomer) - Create customer

## createAccountingCustomer

The *Create customer* endpoint creates a new [customer](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingCustomerResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";
import { AccountingAddressType, CustomerStatus, PhoneNumberType } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingCustomers.createAccountingCustomer({
  accountingCustomer: {
    addresses: [
      {
        city: "East Kylie",
        country: "Slovakia (Slovak Republic)",
        line1: "pariatur",
        line2: "soluta",
        postalCode: "65211",
        region: "distinctio",
        type: AccountingAddressType.Delivery,
      },
    ],
    contactName: "aliquid",
    contacts: [
      {
        address: {
          city: "Kennedyhaven",
          country: "Christmas Island",
          line1: "neque",
          line2: "fugit",
          postalCode: "41379",
          region: "voluptatem",
          type: AccountingAddressType.Delivery,
        },
        email: "Nella.Bosco8@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Dr. Randolph McDermott",
        phone: [
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Unknown,
      },
    ],
    customerName: "dolorum",
    defaultCurrency: "GBP",
    emailAddress: "quae",
    id: "08e0adcf-4b92-4187-9fce-953f73ef7fbc",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "1-784-488-1670 x9381",
    registrationNumber: "porro",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Archived,
    supplementalData: {
      content: {
        "iusto": {
          "eligendi": "ducimus",
        },
      },
    },
    taxNumber: "alias",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 639473,
}).then((res: CreateAccountingCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateAccountingCustomerRequest](../../models/operations/createaccountingcustomerrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateAccountingCustomerResponse](../../models/operations/createaccountingcustomerresponse.md)>**

