/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { loanWritebackCreateOperationsGet } from "../../funcs/loanWritebackCreateOperationsGet.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCreateOperationRequest$inboundSchema,
};

export const tool$loanWritebackCreateOperationsGet: ToolDefinition<
  typeof args
> = {
  name: "loan-writeback-create-operations-get",
  description: `Get create operation

Retrieve create operation.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await loanWritebackCreateOperationsGet(
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
