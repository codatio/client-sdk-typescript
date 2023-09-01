# accountingCustomers

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
        city: "Reingerstad",
        country: "Palau",
        line1: "odio",
        line2: "fugit",
        postalCode: "14002",
        region: "neque",
        type: AccountingAddressType.Billing,
      },
      {
        city: "Blaine",
        country: "Croatia",
        line1: "unde",
        line2: "nulla",
        postalCode: "81136-7167",
        region: "fugiat",
        type: AccountingAddressType.Billing,
      },
    ],
    contactName: "quos",
    contacts: [
      {
        address: {
          city: "South Anastacioshire",
          country: "Belarus",
          line1: "aperiam",
          line2: "totam",
          postalCode: "77044",
          region: "dolores",
          type: AccountingAddressType.Delivery,
        },
        email: "Marcella.Schumm@gmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Terence Reynolds",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Fax,
          },
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "Reno",
          country: "Taiwan",
          line1: "alias",
          line2: "quia",
          postalCode: "69078-1845",
          region: "odit",
          type: AccountingAddressType.Unknown,
        },
        email: "Lillie92@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Miss Alison Hayes",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Primary,
          },
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Landline,
          },
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Mobile,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "Grand Prairie",
          country: "Cocos (Keeling) Islands",
          line1: "expedita",
          line2: "voluptatum",
          postalCode: "38324-7423",
          region: "magnam",
          type: AccountingAddressType.Delivery,
        },
        email: "Mose.Bayer28@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Glen Satterfield",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Fax,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Unknown,
          },
        ],
        status: CustomerStatus.Unknown,
      },
      {
        address: {
          city: "Stillwater",
          country: "Guinea",
          line1: "reprehenderit",
          line2: "aperiam",
          postalCode: "34451",
          region: "error",
          type: AccountingAddressType.Unknown,
        },
        email: "Jabari_Streich76@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Tonya Towne",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Landline,
          },
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Primary,
          },
        ],
        status: CustomerStatus.Active,
      },
    ],
    customerName: "vero",
    defaultCurrency: "GBP",
    emailAddress: "repudiandae",
    id: "b1e5a2b1-2eb0-47f1-96db-99545fc95fa8",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "(509) 256-8772 x0977",
    registrationNumber: "ipsum",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Archived,
    supplementalData: {
      content: {
        "doloremque": {
          "veniam": "libero",
          "architecto": "cupiditate",
        },
        "molestiae": {
          "possimus": "non",
          "magnam": "itaque",
          "sed": "asperiores",
          "veniam": "consequuntur",
        },
        "facere": {
          "odit": "pariatur",
          "amet": "exercitationem",
          "ab": "velit",
        },
      },
    },
    taxNumber: "facilis",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 731065,
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

