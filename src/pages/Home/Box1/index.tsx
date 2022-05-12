import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Box } from './box.svg';
import styles from './index.less';

const Page = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <Box />
      </div>
    </div>
  );
};

export default Page;
