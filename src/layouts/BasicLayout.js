import { Layout } from 'antd';
import Menu from './Menu';

import styles from './BasicLayout.less';
const { Content } = Layout;

const BasicLayout = (props) => {
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Menu />
        <Content className={styles.main}>
          {props.children}
        </Content>
      </Layout>
  );
};
export default BasicLayout;
