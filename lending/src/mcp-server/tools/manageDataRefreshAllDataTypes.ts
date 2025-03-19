/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { manageDataRefreshAllDataTypes } from "../../funcs/manageDataRefreshAllDataTypes.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RefreshAllDataTypesRequest$inboundSchema,
};

export const tool$manageDataRefreshAllDataTypes: ToolDefinition<typeof args> = {
  name: "manage-data-refresh-all-data-types",
  description: `Refresh all data

Refreshes all data types with \`fetch on first link\` set to \`true\` for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

[Read more](https://docs.codat.io/core-concepts/data-type-settings) about data type settings and \`fetch on first link\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await manageDataRefreshAllDataTypes(
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

    return formatResult(void 0, apiCall);
  },
};
