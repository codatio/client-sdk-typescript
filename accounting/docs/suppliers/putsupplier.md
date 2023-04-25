# putSupplier
Available in: `suppliers`

Push supplier

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support updating suppliers.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { PutSupplierRequest, PutSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: PutSupplierRequest = {
  supplier: {
    addresses: [
      {
        city: "Roswell",
        country: "United Kingdom",
        line1: "ducimus",
        line2: "libero",
        postalCode: "07954",
        region: "a",
        type: AddressTypeEnum.Unknown,
      },
      {
        city: "Yvonneburgh",
        country: "Mexico",
        line1: "fugit",
        line2: "esse",
        postalCode: "04461",
        region: "dolore",
        type: AddressTypeEnum.Delivery,
      },
    ],
    contactName: "incidunt",
    defaultCurrency: "consequatur",
    emailAddress: "porro",
    id: "8f08bff1-081e-488f-8699-6c8e22be0a3c",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    phone: "445.627.8129 x54400",
    registrationNumber: "minus",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: SupplierStatusEnum.Active,
    supplementalData: {
      content: {
        "porro": {
          "voluptatum": "consectetur",
          "aliquam": "magni",
        },
      },
    },
    supplierName: "in",
    taxNumber: "ipsum",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 774266,
};

sdk.suppliers.putSupplier(req).then((res: PutSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```