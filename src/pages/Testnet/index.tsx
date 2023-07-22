import Menu from '../Home/Menu'
import { ReactComponent as Logo } from '@/assets/logo.svg'

export default function Testnet() {

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', padding: '20px 0' }}>
        <Logo style={{ width: 50, left: 100 }} />
        <Menu />
      </div>
      <div style={{ color: 'white', padding: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>
          Fox Testnet
          <span style={{ fontSize: 16, fontWeight: 200, color: '#b6b6b5' }}>Get started with our testnet now.</span>
        </div>
        <div style={{ margin: '70px 200px', border: '1px solid #b6b6b5', borderRadius: 10, padding: '40px 60px', fontSize: 16 }}>
          <div style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', marginBottom: 30 }}>Configure wallet for our zkEVM testnet</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
            Note: Please completely remove previous Fox networks from your wallet before proceeding, then:
            <span style={{ color: '#ffc000', fontWeight: 400, cursor: 'pointer' }}>Reset wallet for Fox's L2</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center' }}>
            <div>Layer 1</div>
            <div style={{width: '80%', border: '0.75px solid #333333', borderRadius: 5, padding: '10px 25px', display: 'flex', justifyContent: 'space-between'}}>
              Goerli Testnet
              <span style={{ color: '#ffc000', fontWeight: 400, cursor: 'pointer' }}>Connect Wallet</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
            <div>Layer 1</div>
            <div style={{width: '80%', border: '0.75px solid #333333', borderRadius: 5, padding: '10px 25px', display: 'flex', justifyContent: 'space-between'}}>
              Fox Testnet
              <span style={{ color: '#ffc000', fontWeight: 400, cursor: 'pointer' }}>Connect Wallet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
