/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { excelReportsGetStatus } from "../../funcs/excelReportsGetStatus.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetExcelReportGenerationStatusRequest$inboundSchema,
};

export const tool$excelReportsGetStatus: ToolDefinition<typeof args> = {
  name: "excel-reports-get-status",
  description: `Get Excel report status

The *Get Excel report status* returns the status of the report mostly recently requested for Excel generation. It does not return the status of any historical report requests. 

Poll this endpoint to check the progress of the report once you have requested its generation. This will not affect the generation of the report. 

When the report generation completes successfully, the \`inProgress\` property will be marked as \`false\` and the \`success\` field will be marked as \`true\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await excelReportsGetStatus(
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
