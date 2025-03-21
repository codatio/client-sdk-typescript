/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companiesList } from "../../funcs/companiesList.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListCompaniesRequest$inboundSchema.optional(),
};

export const tool$companiesList: ToolDefinition<typeof args> = {
  name: "companies-list",
  description: `List companies

The *List companies* endpoint returns a list of [companies](https://docs.codat.io/lending-api#/schemas/Company) associated to your instances.

A [company](https://docs.codat.io/lending-api#/schemas/Company) represents a business sharing access to their data.
Each company can have multiple [connections](https://docs.codat.io/lending-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.

## Filter by tags

The *List companies* endpoint supports the filtering of companies using [tags](https://docs.codat.io/using-the-api/managing-companies#add-metadata-to-a-company). It supports the following operators with [Codat’s query language](https://docs.codat.io/using-the-api/querying):

- equals (\`=\`)
- not equals (\`!=\`)
- contains (\`~\`)

For example, you can use the querying to filter companies tagged with a specific foreign key, region, or owning team: 
- Foreign key: \`uid = {yourCustomerId}\`
- Region: \`region != uk\`
- Owning team and region: \`region = uk && owningTeam = invoice-finance\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await companiesList(
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
