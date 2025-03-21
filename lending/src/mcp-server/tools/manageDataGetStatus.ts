/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { manageDataGetStatus } from "../../funcs/manageDataGetStatus.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetDataStatusRequest$inboundSchema,
};

export const tool$manageDataGetStatus: ToolDefinition<typeof args> = {
  name: "manage-data-get-status",
  description: `Get data status

Get the state of each data type for a company`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await manageDataGetStatus(
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
