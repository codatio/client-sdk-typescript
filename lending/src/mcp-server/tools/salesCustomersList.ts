/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { salesCustomersList } from "../../funcs/salesCustomersList.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListCommerceCustomersRequest$inboundSchema,
};

export const tool$salesCustomersList: ToolDefinition<typeof args> = {
  name: "sales-customers-list",
  description: `List customers

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/lending-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/lending-api#/schemas/Customer) are people or organizations that place orders, make payments and recieve goods and/or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    `,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await salesCustomersList(
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
