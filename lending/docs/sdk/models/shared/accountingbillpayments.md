# AccountingBillPayments

## Example Usage

```typescript
import { AccountingBillPayments } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: AccountingBillPayments = {
  results: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("1000"),
      currency: "USD",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("0"),
      currency: "USD",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("0"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
            {
              type: "CreditNote",
              id: "y",
              amount: new Decimal("1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("2000"),
      currency: "EUR",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "PaymentOnAccount",
              id: "y",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("-1000"),
      currency: "EUR",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("-1000"),
          links: [
            {
              type: "CreditNote",
              id: "y",
              amount: new Decimal("1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("-1000"),
      currency: "GBP",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("-1000"),
          links: [
            {
              type: "PaymentOnAccount",
              id: "y",
              amount: new Decimal("1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("250"),
      currency: "GBP",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("0"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-750"),
            },
            {
              type: "CreditNote",
              id: "y",
              amount: new Decimal("750"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("250"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-250"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("1000"),
      currency: "GBP",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("2000"),
      currency: "EUR",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("0"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
            {
              type: "CreditNote",
              id: "y",
              amount: new Decimal("1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("0"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
            {
              type: "CreditNote",
              id: "z",
              amount: new Decimal("1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "PaymentOnAccount",
              id: "customer-001",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("0"),
      currency: "EUR",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("0"),
          links: [
            {
              type: "Bill",
              id: "w",
              amount: new Decimal("-1000"),
            },
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
            {
              type: "CreditNote",
              id: "y",
              amount: new Decimal("1000"),
            },
            {
              type: "CreditNote",
              id: "z",
              amount: new Decimal("1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("1000"),
      currency: "GBP",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "001",
      accountRef: {},
      totalAmount: new Decimal("5000"),
      currency: "GBP",
      date: "1901-01-01",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("4000"),
          links: [
            {
              type: "PaymentOnAccount",
              id: "y",
              amount: new Decimal("-4000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "001",
      accountRef: {},
      totalAmount: new Decimal("5000"),
      currency: "EUR",
      date: "1901-01-01",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "x",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("1000"),
          links: [
            {
              type: "Bill",
              id: "y",
              amount: new Decimal("-1000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
        {
          amount: new Decimal("3000"),
          links: [
            {
              type: "PaymentOnAccount",
              id: "y",
              amount: new Decimal("-3000"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      accountRef: {},
      totalAmount: new Decimal("500"),
      currency: "GBP",
      date: "2022-10-23T00:00:00Z",
      note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
      paymentMethodRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "AliPay",
      },
      lines: [
        {
          amount: new Decimal("500"),
          links: [
            {
              type: "Bill",
              id: "a",
              amount: new Decimal("-1000"),
            },
            {
              type: "Bill",
              id: "b",
              amount: new Decimal("-1000"),
            },
            {
              type: "CreditNote",
              id: "y",
              amount: new Decimal("750"),
            },
            {
              type: "CreditNote",
              id: "z",
              amount: new Decimal("750"),
            },
          ],
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalResults: 1,
  links: {
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `results`                                                                                         | [shared.AccountingBillPayment](../../../sdk/models/shared/accountingbillpayment.md)[]             | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |