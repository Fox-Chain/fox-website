import { useLayoutEffect, useRef } from 'react';
import styles from './index.less';

const Page = (props) => {
  const { title, desc, btn } = props;

  return (
    <div className={styles.page}>
      <section className="showcase">
        <header>
          <h2 className="logo"></h2>
          {/* <div className="toggle"></div> */}
        </header>
        <div className="text">
          {/* <h2>{title} </h2> */}
          <h3>{title}</h3>
          <p>{desc}</p>
          {btn || <a href="#">Explore</a>}
        </div>
        {props.children}
      </section>
    </div>
  );
};

export default Page;
