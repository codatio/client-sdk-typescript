# CompanyAccessToken

Details of the access token provisioned for a company.

## Example Usage

```typescript
import { CompanyAccessToken } from "@codat/platform/sdk/models/shared";

let value: CompanyAccessToken = {
  expiresIn: 86400,
  accessToken: "string",
  tokenType: "Bearer",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `expiresIn`                                           | *number*                                              | :heavy_check_mark:                                    | The number of seconds until the access token expires. | 86400                                                 |
| `accessToken`                                         | *string*                                              | :heavy_check_mark:                                    | The access token for the company.                     |                                                       |
| `tokenType`                                           | *string*                                              | :heavy_check_mark:                                    | The type of token.                                    | Bearer                                                |