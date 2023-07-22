import { useState } from "react";
import { Input, Select } from "antd"
import { ReactComponent as Logo } from '@/assets/logo.svg'
import styles from './styles.less'
import eth from "@/assets/eth.svg"

export default function InputSection(props: any) {

  const { isLock = false, testnet } = props

  const [token, setToken] = useState('ETH')
  const [tokenValue, setTokenValue] = useState('')

  return (
    <div className={styles.inputSection}>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <Input value={tokenValue} placeholder="0.00" onChange={(e) => { setTokenValue(e.target.value) }} />
        <Select
          value={token}
          onChange={(e) => { setToken(e) }}
          dropdownClassName={styles.dropDownMenu}
          disabled={isLock}
        >
          <Select.Option value="ETH" className={styles.optionItem}>
            <img src={eth} style={{ width: 25, marginRight: 8 }} />
            ETH
          </Select.Option>
          <Select.Option value="USDC" className={styles.optionItem}>
            <img src={'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389'} style={{ width: 25, marginRight: 8 }} />
            USDC
          </Select.Option>
        </Select>
      </div>
      <div style={{ width: '15%', border: '1px solid #b6b6b57a', borderRadius: 20, padding: '8px 0', cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', placeContent: 'center' }}>
          {testnet == 'Fox Testnet' ?
            <Logo style={{ width: 20, marginRight: 8 }} /> :
            <img src={eth} style={{ width: 20, marginRight: 8 }} />
          }
          <div>{testnet}</div>
        </div>
      </div>
    </div>
  );
}
