/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { liabilitiesListLoanTransactions } from "../../funcs/liabilitiesListLoanTransactions.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListLoanTransactionsRequest$inboundSchema,
};

export const tool$liabilitiesListLoanTransactions: ToolDefinition<typeof args> =
  {
    name: "liabilities-list-loan-transactions",
    description: `List loan transactions

The *List loan transactions* endpoint returns all [loan transactions](https://docs.codat.io/lending-api#/schemas/LoanTransactions) identified from a company's accounting, banking, and commerce integrations.

This detail gives analysts a better idea of the loan obligations a company may have.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.
`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await liabilitiesListLoanTransactions(
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
