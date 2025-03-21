/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataIntegrityStatus } from "../../funcs/dataIntegrityStatus.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetDataIntegrityStatusRequest$inboundSchema,
};

export const tool$dataIntegrityStatus: ToolDefinition<typeof args> = {
  name: "data-integrity-status",
  description: `Get data integrity status

The *Get data integrity status* endpoint returns the [status](https://docs.codat.io/lending-api#/schemas/DataIntegrityStatus) for the company’s match results between the data type provided in the URL and other data types that Data Integrity uses to support matching.
This endpoint helps you understand whether match data is available and, if so, how to usefully query it.

The response tells you:

- Whether match results are available.
- When the results were generated, and their status.
- The connection IDs, amounts, and dates involved to support useful querying.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataIntegrityStatus(
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
