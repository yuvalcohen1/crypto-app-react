export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: number;
  price: number;
  listedAt: number;
  tier: number;
  change: number;
  rank: number;
  sparkline: any[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": number;
  btcPrice: number;
}
