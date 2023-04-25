# updateCustomer
Available in: `customers`

Posts an updated customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support updating customers.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCustomerRequest, UpdateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: UpdateCustomerRequest = {
  customer: {
    addresses: [
      {
        city: "Southaven",
        country: "Nicaragua",
        line1: "dolorem",
        line2: "velit",
        postalCode: "88422-5292",
        region: "dolorum",
        type: AddressTypeEnum.Billing,
      },
      {
        city: "Morissettestad",
        country: "Trinidad and Tobago",
        line1: "modi",
        line2: "assumenda",
        postalCode: "24833-7563",
        region: "nostrum",
        type: AddressTypeEnum.Delivery,
      },
      {
        city: "North Cristina",
        country: "Tuvalu",
        line1: "inventore",
        line2: "ipsum",
        postalCode: "25121-0504",
        region: "cum",
        type: AddressTypeEnum.Delivery,
      },
    ],
    contactName: "ratione",
    contacts: [
      {
        address: {
          city: "Port Adriana",
          country: "Mongolia",
          line1: "sed",
          line2: "harum",
          postalCode: "42290-1225",
          region: "pariatur",
          type: AddressTypeEnum.Billing,
        },
        email: "Virgie_Gleichner15@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00Z",
        name: "Tabitha Toy",
        phone: [
          {
            number: "veritatis",
            type: PhoneNumberTypeEnum.Primary,
          },
          {
            number: "quod",
            type: PhoneNumberTypeEnum.Fax,
          },
          {
            number: "sapiente",
            type: PhoneNumberTypeEnum.Unknown,
          },
        ],
        status: CustomerStatusEnum.Active,
      },
      {
        address: {
          city: "New Raleigh",
          country: "Palau",
          line1: "voluptatibus",
          line2: "modi",
          postalCode: "61494",
          region: "error",
          type: AddressTypeEnum.Delivery,
        },
        email: "Pierce.McCullough83@gmail.com",
        modifiedDate: "2022-10-23T00:00:00Z",
        name: "Michelle Trantow",
        phone: [
          {
            number: "neque",
            type: PhoneNumberTypeEnum.Fax,
          },
          {
            number: "repellendus",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "quisquam",
            type: PhoneNumberTypeEnum.Mobile,
          },
        ],
        status: CustomerStatusEnum.Archived,
      },
    ],
    customerName: "doloremque",
    defaultCurrency: "adipisci",
    emailAddress: "quasi",
    id: "08d9c337-4730-482b-94f2-ab1fd5671e9c",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    phone: "342.406.2441",
    registrationNumber: "aliquam",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: CustomerStatusEnum.Unknown,
    supplementalData: {
      content: {
        "blanditiis": {
          "quisquam": "itaque",
          "consequatur": "recusandae",
          "iste": "error",
        },
        "dicta": {
          "unde": "numquam",
          "temporibus": "omnis",
        },
      },
    },
    taxNumber: "amet",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "deserunt",
  forceUpdate: false,
  timeoutInMinutes: 495515,
};

sdk.customers.updateCustomer(req).then((res: UpdateCustomerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```