/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsReceivableReportsGetAgedDebtors } from "../../funcs/accountsReceivableReportsGetAgedDebtors.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAccountingAgedDebtorsReportRequest$inboundSchema,
};

export const tool$accountsReceivableReportsGetAgedDebtors: ToolDefinition<
  typeof args
> = {
  name: "accounts-receivable-reports-get-aged-debtors",
  description: `Aged debtors report

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsReceivableReportsGetAgedDebtors(
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
