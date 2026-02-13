# IssueLinks

## Example Usage

```typescript
import { IssueLinks } from "@codat/platform/sdk/models/shared";

let value: IssueLinks = {
  logs:
    "https://api.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/sync/{datasetId}/validation",
  portal:
    "https://app.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/pull-history",
  readMore:
    "https://docs.codat.io/using-the-api/get-data-troubleshooting#warning.validation",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `logs`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | A link to the validation logs, providing details on any errors or warnings encountered.         | https://api.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/sync/{datasetId}/validation |
| `portal`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | A link to the company's past data read history in the Codat portal.                             | https://app.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/pull-history                |
| `readMore`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | A link to Codat's documentation with additional information on how to troubleshoot this issue.  | https://docs.codat.io/using-the-api/get-data-troubleshooting#warning.validation                 |