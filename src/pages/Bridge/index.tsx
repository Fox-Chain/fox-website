import { useState } from "react";
import Menu from '../Home/Menu'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { Button } from 'antd';
import { SwapOutlined } from '@ant-design/icons'
import InputSection from './InputSection';

export default function Bridge() {

  const [fromTestnet, setFromTestnet] = useState("Goerli Testnet")
  const [toTestnet, setToTestnet] = useState("Fox Testnet")

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', padding: '20px 0' }}>
        <Logo style={{ width: 50, left: 100 }} />
        <Menu />
      </div>
      <div style={{ color: 'white', padding: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>
          Fox Bridge
          <span style={{ fontSize: 16, fontWeight: 200, color: '#b6b6b5' }}>Send tokens between Goerli Testnet and Fox Testnet.</span>
        </div>
        <div style={{ margin: '70px 300px', border: '1px solid #b6b6b5', borderRadius: 10, padding: '40px 60px', fontSize: 16, textAlign: 'center' }}>
          <InputSection testnet={fromTestnet} />
          <SwapOutlined
            rotate={90}
            style={{ float: 'left', fontSize: 24, padding: 3, left: 515, bottom: 15, color: '#ffffffb3', background: 'black', border: '1px solid #ffffffb3', borderRadius: 50, cursor: 'pointer' }}
            onClick={()=>{
              setFromTestnet(toTestnet)
              setToTestnet(fromTestnet)
            }}
          />
          <InputSection testnet={toTestnet} isLock />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: 30, fontSize: 18 }}>
            <div>Fees</div>
            <div>—</div>
          </div>
          <Button style={{background: '#ffc000', color: 'black', width: '20%', height: 40, fontSize: 18, fontWeight: 'bold', border: 'none', borderRadius: 5, margin: '20px 0'}}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
