export interface CurrencyData {
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    circulating_supply: number,
    current_price: number,
    fully_diluted_valuation: number,
    high_24h: number,
    id: string,
    image: string,
    last_updated: string,
    low_24h: number,
    market_cap: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    market_cap_rank: number,
    max_supply: number,
    name: string,
    price_change_24h: number |null,
    price_change_percentage_24h: number|undefined,
    roi: null,
    symbol: string,
    total_supply: number,
    total_volume: number,
}

export interface ProfileData {
    googleId: string,
    imageUrl: string,
    email: string,
    name: string,
    givenName: string,
    familyName: string
    }

export interface CoinDetails {
    id: string,
    symbol: string,
    name: string,
    asset_platform_id: null,
    platforms: {
      "": ""
    },
    block_time_in_minutes: number,
    hashing_algorithm: string,
    categories: [
      string,
    ],
    public_notice: null,
    additional_notices: [],
    description: description,
    links: {
      homepage: [],
      blockchain_site: [],
      official_forum_url: [],
      chat_ur: [],
      announcement_url: [],
      twitter_screen_name: string,
      facebook_username: string,
      bitcointalk_thread_identifier: null,
      telegram_channel_identifier: string,
      subreddit_url: string,
      repos_url: {
        github: [],
        bitbucket: []
      }
    },
    image: coinImg,
    country_origin: string,
    genesis_date: string,
    sentiment_votes_up_percentage: number,
    sentiment_votes_down_percentage: number,
    market_cap_rank: number,
    coingecko_rank: number,
    coingecko_score: number,
    developer_score: number,
    community_score: number,
    liquidity_score: number,
    public_interest_score: number,
    public_interest_stats: {
      alexa_rank: number,
      bing_matches: null
    },
    status_updates: [],
    last_updated: string,
  };
  export interface description{
      en:string,
  };
  export interface coinImg
  {
    thumb: string,
    small: string,
    large: string,
  };