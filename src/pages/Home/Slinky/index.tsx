import { useLayoutEffect, useMemo } from 'react';
import styles from './index.less';

const Second = () => {
  useLayoutEffect(() => {
    var timeline = new TimelineMax({ repeat: -1 })
      .add(
        TweenMax.staggerTo(
          '.slink',
          1,
          { rotationX: -180, ease: Power2.easeIn, transformOrigin: '50% 125%' },
          0.05,
        ),
      )
      .to('.slinky', 4, { y: -455, ease: Power0.easeNone }, 0)
      .timeScale(1);
  }, []);
  return (
    <div className={styles.second}>
      <div className="container">
        <div className="slinky">
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
          <div className="slink"></div>
        </div>
      </div>
    </div>
  );
};

export default Second;
