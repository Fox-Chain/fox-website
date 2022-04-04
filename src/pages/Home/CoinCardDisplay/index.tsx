import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdArrowRightAlt } from 'react-icons/md';

import { Coin, coinToLogo } from '@/constants';
import { coinToCoinGeckoId } from '@/constants/coin';
import Opt from '@/util/option';
import { formatUSD } from '@/util/currency';

import CoinTextWithLogo from '../CoinTextWithLogo';

import styles from './index.less';

const LogoSvgProps = {
  width: '25',
  height: '25',
};
const BaseCard: React.FC<{
  coin1: Coin;
  coin2: Coin;
}> = ({ coin1, coin2 }) => {
  return (
    <div className="inner-card">
      <CoinTextWithLogo
        coin={coin1}
        svgProps={LogoSvgProps}
        textClassName="coin-text"
      />
      <div className="plus">+</div>
      <CoinTextWithLogo
        coin={coin2}
        svgProps={LogoSvgProps}
        textClassName="coin-text"
      />
    </div>
  );
};

const MintedCard: React.FC<{
  coin: Coin;
}> = ({ coin }) => {
  return (
    <div className="inner-card">
      <CoinTextWithLogo
        coin={coin}
        svgProps={LogoSvgProps}
        textClassName="coin-text"
      />
    </div>
  );
};

const CardStat: React.FC<{
  title: string;
  value: Option<string>;
  loading: boolean;
}> = ({ title, value, loading }) => {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="value">
        {loading || value === undefined ? '...' : value}
      </div>
    </div>
  );
};

const ArrowWithText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="arrow-with-text">
      <span className="text"> {text}</span>
      <MdArrowRightAlt color="#000" size={30} viewBox="4 4 16 16" />
    </div>
  );
};

const CardStats: React.FC<{
  coin: Coin;
}> = ({ coin }) => {
  const [data, setData] = useState<{
    price?: number;
    market_cap?: number;
    market_cap_rank?: number;
    volume?: number;
    circulating_supply?: number;
  }>({});
  const loading = data.price === undefined;

  const coinGeckoId = coinToCoinGeckoId[coin];
  const hasCoinGeckoId = coinGeckoId !== undefined;

  useEffect(() => {
    if (hasCoinGeckoId) {
      axios({
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/${coinGeckoId}`,
      })
        .then((data) => data.data)
        .then((data) => {
          console.log(coin, data);
          const market_data = data.market_data;

          const newData = {
            price: market_data.current_price.usd,
            market_cap_rank: data.market_cap_rank,
            market_cap: market_data.market_cap.usd,
            volume: market_data.total_volume.usd,
            circulating_supply: market_data.circulating_supply,
          };

          for (const prop in newData) {
            // @ts-ignore
            if (newData[prop] === undefined) {
              console.log('prop ', prop, ' is undefined');
              return;
            }
          }

          setData(newData);
        });
    }
  }, [coin, coinGeckoId, hasCoinGeckoId]);

  if (!hasCoinGeckoId) {
    return <div>CoinGeckoId doesn't exist</div>;
  }

  const format = (val: number) => {
    return formatUSD(val);
  };

  const price = Opt.map(data.price, format);
  const market_cap = Opt.map(data.market_cap, format);
  const total_volume = Opt.map(data.volume, format);
  const circulating_supply = Opt.map(data.circulating_supply, format);

  return (
    <div className="more-info">
      <h1>CoinMarketCap Rank: {loading ? '...' : data.market_cap_rank}</h1>
      <div className="stats">
        <CardStat title="Price" value={price} loading={loading} />
        <CardStat title="Market Cap" value={market_cap} loading={loading} />
        <CardStat title="Volume (24h)" value={total_volume} loading={loading} />
        <CardStat
          title="Circulating Supply"
          value={circulating_supply}
          loading={loading}
        />
      </div>
    </div>
  );
};

const Card: React.FC<{
  className?: string;
  coin: Coin;
}> = ({ className, coin }) => {
  const Svg = coinToLogo[coin];

  const classes = ['card'];
  if (className !== undefined) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')}>
      <div className="additional">
        <div className="user-card">
          <div className="name center">{coin}</div>
          <Svg width="110" />
        </div>
        <CardStats coin={coin} />
      </div>
      <div className="general">
        <BaseCard coin1={coin} coin2="HAS" />
        <ArrowWithText text="Mint" />
        <MintedCard coin="USDH" />
        <ArrowWithText text="Redeem" />
        <BaseCard coin1={coin} coin2="HAS" />
      </div>
    </div>
  );
};

const CoinCardDisplay = () => {
  return (
    <div className={styles['user-card-provider']}>
      <div className="center">
        <div>
          <Card coin="USDT" />
          <Card coin="BUSD" />
        </div>
        <div>
          <Card className="green" coin="USDC" />
          <Card className="green" coin="DAI" />
        </div>
      </div>
    </div>
  );
};

export default CoinCardDisplay;
