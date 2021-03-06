import { ReactComponent as USDTLogo } from '@/static_assets/logos/coins/tether-usdt-logo.svg';
import { ReactComponent as USDCLogo } from '@/static_assets/logos/coins/usd-coin-usdc-logo.svg';
import { ReactComponent as BUSDLogo } from '@/static_assets/logos/coins/binance-usd-busd-logo.svg';
import { ReactComponent as DAILogo } from '@/static_assets/logos/coins/multi-collateral-dai-dai-logo.svg';
import { ReactComponent as HASLogo } from '@/static_assets/logos/coins/HAS-LOGO.svg';
import { ReactComponent as USDHLogo } from '@/static_assets/logos/coins/USDH-LOGO.svg';

export type Coin = 'USDT' | 'USDC' | 'HAS' | 'USDH' | 'BUSD' | 'DAI';

export const coinToLogo: Record<Coin, SVGComponent> = {
  USDT: USDTLogo,
  USDC: USDCLogo,
  HAS: HASLogo,
  USDH: USDHLogo,
  BUSD: BUSDLogo,
  DAI: DAILogo,
};

export const coinToCoinGeckoId: Record<Coin, string | undefined> = {
  USDT: 'tether',
  USDC: 'usd-coin',
  BUSD: 'binance-usd',
  DAI: 'dai',
  HAS: undefined,
  USDH: undefined,
};
