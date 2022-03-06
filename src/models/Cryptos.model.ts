import { Coin } from "./Coin.model";
import { Stats } from "./Statsmodel.";

export interface Cryptos {
  data: {
    coins: Coin[];
    stats: Stats;
  };
  status: string;
}
