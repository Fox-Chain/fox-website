import { Layout } from 'antd';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import Menu from './Menu';

import styles from './BasicLayout.less';
const { Content } = Layout;

const BasicLayout = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <a href='/'><Logo className={styles.logo} /></a>
      <Menu />
      <Content className={styles.main}>
        {props.children}
      </Content>
    </Layout>
  );
};
export default BasicLayout;
