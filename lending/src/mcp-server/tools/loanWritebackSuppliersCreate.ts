/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { loanWritebackSuppliersCreate } from "../../funcs/loanWritebackSuppliersCreate.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateSupplierRequest$inboundSchema,
};

export const tool$loanWritebackSuppliersCreate: ToolDefinition<typeof args> = {
  name: "loan-writeback-suppliers-create",
  description: `Create supplier

The *Create supplier* endpoint creates a new [supplier](https://docs.codat.io/lending-api#/schemas/Supplier) for a given company's connection.

[Suppliers](https://docs.codat.io/lending-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/lending-api#/operations/get-create-update-suppliers-model).
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await loanWritebackSuppliersCreate(
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
