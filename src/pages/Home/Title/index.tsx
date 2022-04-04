import styles from './index.less';

export const Title = () => {
  return (
    <div className={styles['title-wrapper']}>
      <div className="title">
        {/* <h1>
          <div>
            <span>the</span>
            STABLECOIN&FOREX
            <span>for</span>
          </div>
          <div>GREAT SOCIETY of FREE MEN</div>
        </h1>
        <p>
          Pure on chain, Algorithmic Stablecoin, PERPETUAL FOREX, Flexible Pair,
          Highly Scalable
        </p> */}
        <div className={'logos'}>USDH</div>
        <h1>ALGORITHMIC STABLECOIN PROTOCOL</h1>
      </div>
    </div>
  );
};

export default Title;
