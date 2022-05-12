import { useLayoutEffect, useRef } from 'react';
import styles from './index.less';

const Page = () => {
  useLayoutEffect(() => {
    console.clear();
    const featuresEl = document.querySelector('.features');
    const featureEls = document.querySelectorAll('.feature');

    featuresEl.addEventListener('pointermove', (ev) => {
      featureEls.forEach((featureEl) => {
        // Not optimized yet, I know
        const rect = featureEl.getBoundingClientRect();

        featureEl.style.setProperty('--x', ev.clientX - rect.left);
        featureEl.style.setProperty('--y', ev.clientY - rect.top);
      });
    });
  }, []);
  return (
    <div className={styles.page}>
      <div className="features">
        <div className="feature">
          <a href="#" className="feature-content">
            <strong>Some feature</strong>
            <span>Description of the awesome feature</span>
          </a>
        </div>
        <div className="feature">
          <a href="#" className="feature-content">
            <strong>Some feature</strong>
            <span>Description of the awesome feature</span>
          </a>
        </div>
        <div className="feature">
          <a href="#" className="feature-content">
            <strong>Some feature</strong>
            <span>Description of the awesome feature</span>
          </a>
        </div>
        <div className="feature">
          <a href="#" className="feature-content">
            <strong>Some feature</strong>
            <span>Description of the awesome feature</span>
          </a>
        </div>
        <div className="feature">
          <a href="#" className="feature-content">
            <strong>Some feature</strong>
            <span>Description of the awesome feature</span>
          </a>
        </div>
        <div className="feature">
          <a href="#" className="feature-content">
            <strong>Some feature</strong>
            <span>Description of the awesome feature</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
