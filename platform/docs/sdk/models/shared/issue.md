# Issue

Details of a problem encountered during a data read.

## Example Usage

```typescript
import { Issue } from "@codat/platform/sdk/models/shared";

let value: Issue = {
  type: "warning.validation",
  message:
    "Something doesn't look right about these accounts from Xero. You can see more information in the logs.",
  links: {
    logs:
      "https://api.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/sync/{datasetId}/validation",
    portal:
      "https://app.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/pull-history",
    readMore:
      "https://docs.codat.io/using-the-api/get-data-troubleshooting#warning.validation",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The type of issue.                                                                                     | warning.validation                                                                                     |
| `message`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A message describing the issue.                                                                        | Something doesn't look right about these accounts from Xero. You can see more information in the logs. |
| `links`                                                                                                | [shared.IssueLinks](../../../sdk/models/shared/issuelinks.md)                                          | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |