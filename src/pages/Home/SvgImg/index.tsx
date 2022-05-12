import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Imgsvg } from './img.svg';
import styles from './index.less';

const Page = () => {
  useLayoutEffect(() => {
    const lvl3 = document.querySelectorAll('.lvl-3 path');

    lvl3.forEach((path) => {
      let text = path.querySelector('title').textContent;
      path.addEventListener('click', () => alert(text));
    });
  }, []);
  return (
    <div className={styles.page}>
      <Imgsvg />
    </div>
  );
};

export default Page;
