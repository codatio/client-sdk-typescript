/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { advancedControlsCreateCompany } from "../funcs/advancedControlsCreateCompany.js";
import { advancedControlsGetConfiguration } from "../funcs/advancedControlsGetConfiguration.js";
import { advancedControlsListCompanies } from "../funcs/advancedControlsListCompanies.js";
import { advancedControlsSetConfiguration } from "../funcs/advancedControlsSetConfiguration.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class AdvancedControls extends ClientSDK {
  /**
   * List companies
   *
   * @remarks
   * Returns a list of companies.
   */
  async listCompanies(
    request?: operations.ListCompaniesRequest | undefined,
    options?: RequestOptions,
  ): Promise<shared.Companies> {
    return unwrapAsync(advancedControlsListCompanies(
      this,
      request,
      options,
    ));
  }

  /**
   * Create company
   *
   * @remarks
   * Creates a Codat company
   */
  async createCompany(
    request?: shared.CreateCompany | undefined,
    options?: RequestOptions,
  ): Promise<shared.Company> {
    return unwrapAsync(advancedControlsCreateCompany(
      this,
      request,
      options,
    ));
  }

  /**
   * Get company configuration
   *
   * @remarks
   * Returns a company's commerce sync configuration'.
   */
  async getConfiguration(
    request: operations.GetConfigurationRequest,
    options?: RequestOptions,
  ): Promise<shared.Configuration> {
    return unwrapAsync(advancedControlsGetConfiguration(
      this,
      request,
      options,
    ));
  }

  /**
   * Set configuration
   *
   * @remarks
   * Sets a company's commerce sync configuration.
   */
  async setConfiguration(
    request: operations.SetConfigurationRequest,
    options?: RequestOptions,
  ): Promise<shared.Configuration> {
    return unwrapAsync(advancedControlsSetConfiguration(
      this,
      request,
      options,
    ));
  }
}
