# Configuration

## Overview

Manage mapping options and sync configuration.

### Available Operations

* [get](#get) - Get company configuration
* [getMappingOptions](#getmappingoptions) - Mapping options
* [set](#set) - Set company configuration

## get

Gets a companies expense sync configuration

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.configuration.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCompanyConfigurationRequest](../../models/operations/getcompanyconfigurationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCompanyConfigurationResponse](../../models/operations/getcompanyconfigurationresponse.md)>**


## getMappingOptions

Gets the expense mapping options for a companies accounting software

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetMappingOptionsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.configuration.getMappingOptions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetMappingOptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetMappingOptionsRequest](../../models/operations/getmappingoptionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetMappingOptionsResponse](../../models/operations/getmappingoptionsresponse.md)>**


## set

Sets a companies expense sync configuration

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { SetCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AccountingAddressType, CustomerStatus, PhoneNumberType, SupplierStatus } from "@codat/sync-for-expenses/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.configuration.set({
  companyConfiguration: {
    bankAccount: {
      id: "32",
    },
    customer: {
      addresses: [
        {
          city: "Fort Donnybury",
          country: "Kyrgyz Republic",
          line1: "minus",
          line2: "placeat",
          postalCode: "45398-0306",
          region: "perferendis",
          type: AccountingAddressType.Billing,
        },
      ],
      contactName: "repellendus",
      contacts: [
        {
          address: {
            city: "San Antonio",
            country: "Burundi",
            line1: "at",
            line2: "at",
            postalCode: "47845-7617",
            region: "officia",
            type: AccountingAddressType.Billing,
          },
          email: "Kale_Welch10@gmail.com",
          modifiedDate: "2022-10-23T00:00:00.000Z",
          name: "Pauline Dibbert",
          phone: [
            {
              number: "(877) 492-8687",
              type: PhoneNumberType.Landline,
            },
          ],
          status: CustomerStatus.Active,
        },
      ],
      customerName: "aspernatur",
      defaultCurrency: "GBP",
      emailAddress: "ad",
      id: "929396fe-a759-46eb-90fa-aa2352c59559",
      metadata: {
        isDeleted: false,
      },
      modifiedDate: "2022-10-23T00:00:00.000Z",
      phone: "799.262.6196 x524",
      registrationNumber: "quam",
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: CustomerStatus.Unknown,
      supplementalData: {
        content: {
          "error": {
            "quia": "quis",
          },
        },
      },
      taxNumber: "vitae",
    },
    supplier: {
      addresses: [
        {
          city: "O'Konborough",
          country: "Burkina Faso",
          line1: "quo",
          line2: "sequi",
          postalCode: "36800-6860",
          region: "reiciendis",
          type: AccountingAddressType.Delivery,
        },
      ],
      contactName: "vero",
      defaultCurrency: "nihil",
      emailAddress: "praesentium",
      id: "f097b007-4f15-4471-b5e6-e13b99d488e1",
      metadata: {
        isDeleted: false,
      },
      modifiedDate: "2022-10-23T00:00:00.000Z",
      phone: "(877) 492-8687",
      registrationNumber: "veritatis",
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: SupplierStatus.Unknown,
      supplementalData: {
        content: {
          "enim": {
            "consequatur": "est",
          },
        },
      },
      supplierName: "quibusdam",
      taxNumber: "explicabo",
    },
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: SetCompanyConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.SetCompanyConfigurationRequest](../../models/operations/setcompanyconfigurationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.SetCompanyConfigurationResponse](../../models/operations/setcompanyconfigurationresponse.md)>**

