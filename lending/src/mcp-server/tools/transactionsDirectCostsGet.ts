/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsDirectCostsGet } from "../../funcs/transactionsDirectCostsGet.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAccountingDirectCostRequest$inboundSchema,
};

export const tool$transactionsDirectCostsGet: ToolDefinition<typeof args> = {
  name: "transactions-direct-costs-get",
  description: `Get direct cost

The *Get direct cost* endpoint returns a single direct cost for a given directCostId.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await transactionsDirectCostsGet(
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
