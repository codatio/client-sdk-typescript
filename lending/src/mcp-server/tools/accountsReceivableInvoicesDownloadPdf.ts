/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsReceivableInvoicesDownloadPdf } from "../../funcs/accountsReceivableInvoicesDownloadPdf.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DownloadAccountingInvoicePdfRequest$inboundSchema,
};

export const tool$accountsReceivableInvoicesDownloadPdf: ToolDefinition<
  typeof args
> = {
  name: "accounts-receivable-invoices-download-pdf",
  description: `Get invoice as PDF

Download invoice as a pdf.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsReceivableInvoicesDownloadPdf(
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
