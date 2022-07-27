import { Layout } from 'antd';
import { ReactComponent as Logo } from '@/assets/fox_full.svg';
import { ReactComponent as Github } from '@/assets/github.svg';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Discord } from '@/assets/discord.svg';
import { ReactComponent as Medium } from '@/assets/medium.svg';
import { ReactComponent as Telegram } from '@/assets/telegram.svg';
import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import Menu from './Menu';

import styles from './BasicLayout.less';
const { Content } = Layout;

const BasicLayout = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div>
        <a href='/#/'><Logo className={styles.logo} /></a>
        <Menu />
      </div>
      <Content className={styles.main}>
        {props.children}
      </Content>
      <ul className="social">
          <li>
            <a href="#" title="Github">
              <Github />
            </a>
            <a href="#" title="Twitter">
              <Twitter />
            </a>{' '}
          </li>
          <li>
            <a href="#" title="Telegram">
              <Telegram />
            </a>{' '}
          </li>
          <li>
            <a href="#" title="Discord">
              <Discord />
            </a>{' '}
          </li>
          <li>
            <a href="#" title="Medium">
              <Medium />
            </a>{' '}
          </li>
          <li>
            <a href="#" title="Youtube">
              <Youtube />
            </a>
          </li>
        </ul>
    </Layout>
  );
};
export default BasicLayout;
