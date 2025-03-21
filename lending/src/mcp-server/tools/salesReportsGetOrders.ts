/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesReportsGetOrders } from "../../funcs/salesReportsGetOrders.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCommerceOrdersReportRequest$inboundSchema,
};

export const tool$salesReportsGetOrders: ToolDefinition<typeof args> = {
  name: "sales-reports-get-orders",
  description: `Get orders report

The *Get orders report* endpoint returns the number of orders, total value, and average order value for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

[Learn more](https://docs.codat.io/lending/features/sales-overview#metrics) about the formulas used to calculate the order metrics.

#### Response structure

The Orders report's dimensions and measures are:

| Index         | Dimensions     |
|---------------|----------------|
|   \`index\` = 0 | Period         |
|   \`index\` = 1 | Order metrics  |

| Index         | Measures   |
|---------------|------------|
| \`index\` = 0   | Count      |
| \`index\` = 1   | Value      |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await salesReportsGetOrders(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
