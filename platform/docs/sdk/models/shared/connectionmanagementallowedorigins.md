# ConnectionManagementAllowedOrigins

Success

## Example Usage

```typescript
import { ConnectionManagementAllowedOrigins } from "@codat/platform/sdk/models/shared";

let value: ConnectionManagementAllowedOrigins = {
  allowedOrigins: [
    "https://www.bank-of-dave.com",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedOrigins`                                                                                                                                                                                                                                        | *string*[]                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                      | An array of allowed origins (i.e. your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)). |