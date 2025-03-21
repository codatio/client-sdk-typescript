/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsPayableSuppliersDownloadAttachment } from "../../funcs/accountsPayableSuppliersDownloadAttachment.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DownloadAccountingSupplierAttachmentRequest$inboundSchema,
};

export const tool$accountsPayableSuppliersDownloadAttachment: ToolDefinition<
  typeof args
> = {
  name: "accounts-payable-suppliers-download-attachment",
  description: `Download supplier attachment

The *Download supplier attachment* endpoint downloads a specific attachment for a given \`supplierId\` and \`attachmentId\`.

[Suppliers](https://docs.codat.io/lending-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsPayableSuppliersDownloadAttachment(
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
