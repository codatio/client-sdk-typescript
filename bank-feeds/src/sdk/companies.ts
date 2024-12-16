/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companiesCreate } from "../funcs/companiesCreate.js";
import { companiesDelete } from "../funcs/companiesDelete.js";
import { companiesGet } from "../funcs/companiesGet.js";
import { companiesGetAccessToken } from "../funcs/companiesGetAccessToken.js";
import { companiesList } from "../funcs/companiesList.js";
import { companiesUpdate } from "../funcs/companiesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Companies extends ClientSDK {
  /**
   * Create company
   *
   * @remarks
   * Use the *Create company* endpoint to create a new [company](https://docs.codat.io/bank-feeds-api#/schemas/Company) that represents your customer in Codat.
   *
   * A [company](https://docs.codat.io/bank-feeds-api#/schemas/Company) represents a business sharing access to their data.
   * Each company can have multiple [connections](https://docs.codat.io/bank-feeds-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.
   *
   * If forbidden characters (see `name` pattern) are present in the request, a company will be created with the forbidden characters removed. For example, `Company (Codat[1])` with be created as `Company Codat1`.
   */
  async create(
    request?: shared.CompanyRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<shared.Company> {
    return unwrapAsync(companiesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * List companies
   *
   * @remarks
   * The *List companies* endpoint returns a list of [companies](https://docs.codat.io/bank-feeds-api#/schemas/Company) associated to your instances.
   *
   * A [company](https://docs.codat.io/bank-feeds-api#/schemas/Company) represents a business sharing access to their data.
   * Each company can have multiple [connections](https://docs.codat.io/bank-feeds-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.
   *
   * ## Filter by tags
   *
   * The *List companies* endpoint supports the filtering of companies using [tags](https://docs.codat.io/using-the-api/managing-companies#add-metadata-to-a-company). It supports the following operators with [Codat’s query language](https://docs.codat.io/using-the-api/querying):
   *
   * - equals (`=`)
   * - not equals (`!=`)
   * - contains (`~`)
   *
   * For example, you can use the querying to filter companies tagged with a specific foreign key, region, or owning team:
   * - Foreign key: `uid = {yourCustomerId}`
   * - Region: `region != uk`
   * - Owning team and region: `region = uk && owningTeam = invoice-finance`
   */
  async list(
    request?: operations.ListCompaniesRequest | undefined,
    options?: RequestOptions,
  ): Promise<shared.Companies> {
    return unwrapAsync(companiesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get company
   *
   * @remarks
   * The *Get company* endpoint returns a single company for a given `companyId`.
   *
   * A [company](https://docs.codat.io/bank-feeds-api#/schemas/Company) represents a business sharing access to their data.
   * Each company can have multiple [connections](https://docs.codat.io/bank-feeds-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.
   */
  async get(
    request: operations.GetCompanyRequest,
    options?: RequestOptions,
  ): Promise<shared.Company> {
    return unwrapAsync(companiesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a company
   *
   * @remarks
   * The *Delete company* endpoint permanently deletes a [company](https://docs.codat.io/bank-feeds-api#/schemas/Company), its [connections](https://docs.codat.io/bank-feeds-api#/schemas/Connection) and any cached data. This operation is irreversible.
   *
   * A [company](https://docs.codat.io/bank-feeds-api#/schemas/Company) represents a business sharing access to their data.
   * Each company can have multiple [connections](https://docs.codat.io/bank-feeds-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.
   */
  async delete(
    request: operations.DeleteCompanyRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(companiesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update company
   *
   * @remarks
   * Use the *Update company* endpoint to update both the name and description of the company.
   *
   * A [company](https://docs.codat.io/bank-feeds-api#/schemas/Company) represents a business sharing access to their data.
   * Each company can have multiple [connections](https://docs.codat.io/bank-feeds-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.
   */
  async update(
    request: operations.UpdateCompanyRequest,
    options?: RequestOptions,
  ): Promise<shared.Company> {
    return unwrapAsync(companiesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get company access token
   *
   * @remarks
   * Use the _Get company access token_ endpoint to return an access token for the specified company ID to use in Codat's embedded UI products.
   */
  async getAccessToken(
    request: operations.GetCompanyAccessTokenRequest,
    options?: RequestOptions,
  ): Promise<shared.CompanyAccessToken> {
    return unwrapAsync(companiesGetAccessToken(
      this,
      request,
      options,
    ));
  }
}
