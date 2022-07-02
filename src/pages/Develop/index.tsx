import { useLayoutEffect, useRef } from 'react';
import styles from './index.less';

const Page = () => {

  return (
    <div className={styles.page}>
      <iframe src='/dev/index.html'>

      </iframe>
    </div>
  );
};

export default Page;
