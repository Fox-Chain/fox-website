import { Layout } from 'antd';
import Logo  from '@/assets/fox_full.svg';
import { ReactComponent as Github } from '@/assets/github.svg';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Discord } from '@/assets/discord.svg';
import { ReactComponent as Medium } from '@/assets/medium.svg';
import { ReactComponent as Telegram } from '@/assets/telegram.svg';
import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import { ReactComponent as Mirror } from '@/assets/mirror.svg';

import Menu from './Menu';

import styles from './BasicLayout.less';
const { Content } = Layout;

const BasicLayout = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div>
        <a href='/#/'>
          <img src={Logo} className={styles.logo} />
          </a>
        <Menu />
      </div>
      <Content className={styles.main}>
        {props.children}
      </Content>
      <ul className="social">
          <li>
            <a href="https://github.com/Fox-Chain" target="_blank" title="Github">
              <Github />
            </a>
            <a href="https://twitter.com/foxchain_tech" target="_blank" title="Twitter">
              <Twitter />
            </a>{' '}
          </li>
          <li>
            <a href="https://t.me/fox_tech_official" target="_blank" title="Telegram">
              <Telegram />
            </a>{' '}
          </li>
          {/* <li>
            <a href="https://discord.gg/sTNh6fmT" target="_blank" title="Discord">
              <Discord />
            </a>{' '}
          </li> */}
          {/* <li>
            <a href="#" title="Medium">
              <Medium />
            </a>
          </li> */}
          <li>
            <a href="https://www.youtube.com/channel/UCtn0P_hP0TKMFwjoYyUUAgg" target="_blank" title="Youtube">
              <Youtube />
            </a>
          </li>
          <li>
            <a href="https://mirror.xyz/0x9918a0c87861D5BBAB94BBCE8c59604B3C01d2C8" target="_blank" title="Mirror">
              <Mirror />
            </a>
          </li>
        </ul>
    </Layout>
  );
};
export default BasicLayout;
