# Contact

## Example Usage

```typescript
import { Contact } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Contact = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Name of a contact for a customer.                                           |
| `email`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Email of a contact for a customer.                                          |
| `phone`                                                                     | [shared.PhoneNumberItems](../../../sdk/models/shared/phonenumberitems.md)[] | :heavy_minus_sign:                                                          | An array of Phone numbers.                                                  |
| `address`                                                                   | [shared.Items](../../../sdk/models/shared/items.md)                         | :heavy_minus_sign:                                                          | An object of Address information.                                           |
| `status`                                                                    | [shared.CustomerStatus](../../../sdk/models/shared/customerstatus.md)       | :heavy_check_mark:                                                          | N/A                                                                         |
| `modifiedDate`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | Date of the transfer transaction as recorded in the accounting software.    |