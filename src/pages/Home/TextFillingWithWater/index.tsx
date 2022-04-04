import { useEffect } from 'react';
import styles from './index.less';

const TextFillingWithWater = () => {
  return (
    <div className={styles.TextFillingWithWater}>
      <link
        href="https://fonts.googleapis.com/css?family=Cabin+Condensed:700"
        rel="stylesheet"
        type="text/css"
      />

      <div className="loading wave">Loading</div>

      <div className="loading loading-2 wave wave-2">
        <div className="ff">
          For browsers that don't support background-clip:text:
        </div>
        <div className="loading-2-text"></div>
      </div>
    </div>
  );
};

export default TextFillingWithWater;
