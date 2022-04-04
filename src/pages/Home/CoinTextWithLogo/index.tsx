import { Coin } from '@/constants';
import { coinToLogo } from '@/constants/coin';
import { SVGProps } from 'react';

import styles from './index.less';

const CoinTextWithLogo: React.FC<{
  coin: Coin;
  svgProps?: SVGProps<SVGSVGElement>;
  textClassName?: string;
}> = ({ coin, svgProps = {}, textClassName }) => {
  const Logo = coinToLogo[coin];
  return (
    <div className={styles['coin-text-with-logo']}>
      <Logo {...svgProps} />
      <div className="w-1" />
      <div className={textClassName}>{coin}</div>
    </div>
  );
};

export default CoinTextWithLogo;
