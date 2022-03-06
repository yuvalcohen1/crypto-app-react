import { NewsSingleValue } from "./NewsValue.model";

export interface News {
  queryContext: any;
  readLink: any;
  sort: any[];
  totalEstimatedMatches: number;
  value: NewsSingleValue[];
  _type: string;
}
