# createCustomer
Available in: `customers`

Posts an individual customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating customers.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCustomerRequest, CreateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  CustomerStatusEnum,
  DataTypeEnum,
  PhoneNumberTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCustomerRequest = {
  customer: {
    addresses: [
      {
        city: "Pasco",
        country: "French Polynesia",
        line1: "unde",
        line2: "consequatur",
        postalCode: "74731",
        region: "culpa",
        type: AddressTypeEnum.Delivery,
      },
      {
        city: "Port Marcoschester",
        country: "Democratic People's Republic of Korea",
        line1: "totam",
        line2: "incidunt",
        postalCode: "76181-2098",
        region: "tenetur",
        type: AddressTypeEnum.Billing,
      },
    ],
    contactName: "dolor",
    contacts: [
      {
        address: {
          city: "North Margieland",
          country: "Botswana",
          line1: "veniam",
          line2: "non",
          postalCode: "17849-8333",
          region: "voluptatem",
          type: AddressTypeEnum.Billing,
        },
        email: "Bridget.Bogan53@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00Z",
        name: "Clifford Stiedemann",
        phone: [
          {
            number: "voluptas",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "eum",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "cumque",
            type: PhoneNumberTypeEnum.Primary,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
      {
        address: {
          city: "Batzport",
          country: "Bouvet Island (Bouvetoya)",
          line1: "veritatis",
          line2: "similique",
          postalCode: "41812-6487",
          region: "libero",
          type: AddressTypeEnum.Billing,
        },
        email: "Emil82@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00Z",
        name: "Freddie Conroy",
        phone: [
          {
            number: "atque",
            type: PhoneNumberTypeEnum.Primary,
          },
          {
            number: "dolores",
            type: PhoneNumberTypeEnum.Unknown,
          },
        ],
        status: CustomerStatusEnum.Archived,
      },
      {
        address: {
          city: "North Carrie",
          country: "Samoa",
          line1: "deleniti",
          line2: "esse",
          postalCode: "12079-3259",
          region: "corrupti",
          type: AddressTypeEnum.Billing,
        },
        email: "Joan68@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00Z",
        name: "James Reynolds",
        phone: [
          {
            number: "dicta",
            type: PhoneNumberTypeEnum.Unknown,
          },
          {
            number: "dolores",
            type: PhoneNumberTypeEnum.Primary,
          },
          {
            number: "eum",
            type: PhoneNumberTypeEnum.Unknown,
          },
          {
            number: "corporis",
            type: PhoneNumberTypeEnum.Unknown,
          },
        ],
        status: CustomerStatusEnum.Active,
      },
    ],
    customerName: "sequi",
    defaultCurrency: "illo",
    emailAddress: "temporibus",
    id: "0081090f-6706-4673-b3a6-81c5768dce74",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    phone: "1-405-711-3805",
    registrationNumber: "voluptas",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: CustomerStatusEnum.Unknown,
    supplementalData: {
      content: {
        "tempora": {
          "cupiditate": "officia",
          "minima": "doloribus",
          "suscipit": "sequi",
        },
      },
    },
    taxNumber: "debitis",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 207202,
};

sdk.customers.createCustomer(req).then((res: CreateCustomerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```