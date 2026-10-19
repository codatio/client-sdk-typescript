# CreateSourceAccountRequestBody


## Supported Types

### `shared.SourceAccountV2Prototype`

```typescript
const value: shared.SourceAccountV2Prototype = {
  id: "string",
  accountName: "string",
  accountType: "string",
  accountNumber: "string",
  routingInfo: {
    bankCode: "string",
    type: "string",
  },
  sortCode: "string",
  currency: "GBP",
  balance: 0,
  modifiedDate: "2022-10-23T00:00:00Z",
  accountInfo: {
    description: "string",
    nickname: "string",
    accountOpenDate: "2022-10-23",
    availableBalance: 0,
  },
};
```

### `shared.SourceAccountPrototype`

```typescript
const value: shared.SourceAccountPrototype = {
  id: "string",
  accountName: "string",
  accountType: "string",
  accountNumber: "string",
  sortCode: "string",
  currency: "GBP",
  balance: 0,
  modifiedDate: "2022-10-23T00:00:00Z",
};
```