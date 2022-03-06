import { Thumbnail } from "./Thumnail.model";

export interface NewsImage {
  _type: string;
  thumbnail: Thumbnail;
  isLicensed: boolean;
}
