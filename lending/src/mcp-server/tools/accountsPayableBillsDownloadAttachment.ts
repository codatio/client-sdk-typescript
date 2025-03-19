/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsPayableBillsDownloadAttachment } from "../../funcs/accountsPayableBillsDownloadAttachment.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DownloadAccountingBillAttachmentRequest$inboundSchema,
};

export const tool$accountsPayableBillsDownloadAttachment: ToolDefinition<
  typeof args
> = {
  name: "accounts-payable-bills-download-attachment",
  description: `Download bill attachment

The *Download bill attachment* endpoint downloads a specific attachment for a given \`billId\` and \`attachmentId\`.

[Bills](https://docs.codat.io/lending-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsPayableBillsDownloadAttachment(
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
