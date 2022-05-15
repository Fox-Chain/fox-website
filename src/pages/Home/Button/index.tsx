import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Box } from '@/assets/box.svg';

import styles from './index.less';

const Page = () => {
  return (
    <div className={styles.page}>
      <div className="desc">
        <button>EXPLORE</button>
      </div>
    </div>
  );
};

export default Page;
