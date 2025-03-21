/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionsUnlink } from "../../funcs/connectionsUnlink.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UnlinkConnectionRequest$inboundSchema,
};

export const tool$connectionsUnlink: ToolDefinition<typeof args> = {
  name: "connections-unlink",
  description: `Unlink connection

This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await connectionsUnlink(
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
