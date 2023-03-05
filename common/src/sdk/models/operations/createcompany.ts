import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class CreateCompanyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class CreateCompanyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateCompanyRequestBody;
}

export class CreateCompany401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class CreateCompany200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  created?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnections" })
  dataConnections?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platform" })
  platform?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect" })
  redirect?: string;
}

export class CreateCompanyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createCompany200ApplicationJSONObject?: CreateCompany200ApplicationJSON;

  @SpeakeasyMetadata()
  createCompany401ApplicationJSONObject?: CreateCompany401ApplicationJSON;
}