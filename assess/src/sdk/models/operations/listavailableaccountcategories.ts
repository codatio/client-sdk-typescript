import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class ListAvailableAccountCategoriesChartOfAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailTypeDescription" })
  detailTypeDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailTypeDisplayName" })
  detailTypeDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtypeDisplayName" })
  subtypeDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class ListAvailableAccountCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: ListAvailableAccountCategoriesChartOfAccountCategory })
  listAvailableAccountCategoriesChartOfAccountCategoryAnies?: ListAvailableAccountCategoriesChartOfAccountCategory[];
}