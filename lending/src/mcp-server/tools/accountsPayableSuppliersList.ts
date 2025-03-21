/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsPayableSuppliersList } from "../../funcs/accountsPayableSuppliersList.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAccountingSuppliersRequest$inboundSchema,
};

export const tool$accountsPayableSuppliersList: ToolDefinition<typeof args> = {
  name: "accounts-payable-suppliers-list",
  description: `List suppliers

The *List suppliers* endpoint returns a list of [suppliers](https://docs.codat.io/lending-api#/schemas/Supplier) for a given company's connection.

[Suppliers](https://docs.codat.io/lending-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    `,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsPayableSuppliersList(
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
