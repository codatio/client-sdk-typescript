/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesDisputesGet } from "../../funcs/salesDisputesGet.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCommerceDisputeRequest$inboundSchema,
};

export const tool$salesDisputesGet: ToolDefinition<typeof args> = {
  name: "sales-disputes-get",
  description: `Get dispute

The *Get dispute* endpoint returns a single dispute for a given disputeId.

[Disputes](https://docs.codat.io/lending-api#/schemas/Dispute) are created when a customer is unsatisfied with their purchase or believe they have been charged incorrectly.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await salesDisputesGet(
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
