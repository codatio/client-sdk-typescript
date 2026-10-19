import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the @codat/bank-feeds SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx companiesCreate.example.ts
 */

import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: process.env.CODAT_AUTH_HEADER ?? "",
});

async function main() {
  const result = await codatBankFeeds.companies.create({
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
  });

  console.log(result);
}

main().catch(console.error);
