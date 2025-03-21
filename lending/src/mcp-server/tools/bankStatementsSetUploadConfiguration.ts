/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankStatementsSetUploadConfiguration } from "../../funcs/bankStatementsSetUploadConfiguration.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SetBankStatementUploadConfigurationRequest$inboundSchema,
};

export const tool$bankStatementsSetUploadConfiguration: ToolDefinition<
  typeof args
> = {
  name: "bank-statements-set-upload-configuration",
  description: `Set upload configuration

Use the *Set upload configuration* endpoint to create bank statement upload configuration for the specified data connection. 

With this configuration, you set the source of the data you plan to upload, the ID of the account in third-party banking platform, and a provider ID, if required. This lets us determine the expected format of the data and any source-specific requirements.

Each data connection can only have one configuration for each company and external account ID combination. You will receive a Bad Request response if you try to set it again. `,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await bankStatementsSetUploadConfiguration(
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
