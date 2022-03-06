import { NewsImage } from "./NewsImage.model";

export interface NewsSingleValue {
  about: any[];
  category: string;
  datePublished: Date;
  description: string;
  image: NewsImage;
  name: string;
  provider: any[];
  url: string;
  _type: string;
}
