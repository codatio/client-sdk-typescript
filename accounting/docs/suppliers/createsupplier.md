# createSupplier
Available in: `suppliers`

Push suppliers

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating suppliers.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateSupplierRequest, CreateSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
  SupplierStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSupplierRequest = {
  supplier: {
    addresses: [
      {
        city: "Corpus Christi",
        country: "Gambia",
        line1: "incidunt",
        line2: "eos",
        postalCode: "40680-2176",
        region: "optio",
        type: AddressTypeEnum.Delivery,
      },
    ],
    contactName: "debitis",
    defaultCurrency: "corporis",
    emailAddress: "neque",
    id: "2b6526f8-6285-43fe-a859-ce322231fe66",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    phone: "1-472-281-9763 x876",
    registrationNumber: "sit",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: SupplierStatusEnum.Active,
    supplementalData: {
      content: {
        "tempore": {
          "at": "fugit",
          "cupiditate": "dicta",
          "libero": "recusandae",
        },
        "libero": {
          "quae": "eaque",
          "est": "sed",
          "dolorum": "laborum",
        },
        "atque": {
          "aliquam": "perspiciatis",
          "labore": "esse",
        },
      },
    },
    supplierName: "unde",
    taxNumber: "recusandae",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 842306,
};

sdk.suppliers.createSupplier(req).then((res: CreateSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```