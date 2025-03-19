/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsReceivableDirectIncomesListAttachments } from "../../funcs/accountsReceivableDirectIncomesListAttachments.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.ListAccountingDirectIncomeAttachmentsRequest$inboundSchema,
};

export const tool$accountsReceivableDirectIncomesListAttachments:
  ToolDefinition<typeof args> = {
    name: "accounts-receivable-direct-incomes-list-attachments",
    description: `List direct income attachments

The *List direct income attachments* endpoint returns a list of attachments available to download for given \`directIncomeId\`.

[Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await accountsReceivableDirectIncomesListAttachments(
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
