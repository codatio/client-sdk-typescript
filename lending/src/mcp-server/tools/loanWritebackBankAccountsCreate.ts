/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { loanWritebackBankAccountsCreate } from "../../funcs/loanWritebackBankAccountsCreate.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateBankAccountRequest$inboundSchema,
};

export const tool$loanWritebackBankAccountsCreate: ToolDefinition<typeof args> =
  {
    name: "loan-writeback-bank-accounts-create",
    description: `Create bank account

The *Create bank account* endpoint creates a new [bank account](https://docs.codat.io/lending-api#/schemas/BankAccount) for a given company's connection.

[Bank accounts](https://docs.codat.io/lending-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bank account model](https://docs.codat.io/lending-api#/operations/get-create-update-bankAccounts-model).`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await loanWritebackBankAccountsCreate(
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
