/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { loanWritebackTransfersGetCreateModel } from "../../funcs/loanWritebackTransfersGetCreateModel.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCreateTransfersModelRequest$inboundSchema,
};

export const tool$loanWritebackTransfersGetCreateModel: ToolDefinition<
  typeof args
> = {
  name: "loan-writeback-transfers-get-create-model",
  description: `Get create transfer model

The *Get create transfer model* endpoint returns the expected data for the request payload when creating a [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company and integration.

[Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await loanWritebackTransfersGetCreateModel(
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
