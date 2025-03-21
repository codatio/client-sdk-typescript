/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingBankDataAccountsList } from "../../funcs/accountingBankDataAccountsList.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAccountingBankAccountsRequest$inboundSchema,
};

export const tool$accountingBankDataAccountsList: ToolDefinition<typeof args> =
  {
    name: "accounting-bank-data-accounts-list",
    description: `List bank accounts

The *List bank accounts* endpoint returns a list of [bank accounts](https://docs.codat.io/lending-api#/schemas/BankAccount) for a given company's connection.

[Bank accounts](https://docs.codat.io/lending-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    `,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await accountingBankDataAccountsList(
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
