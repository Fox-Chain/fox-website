import { useLayoutEffect, useRef } from 'react';
import styles from './index.less';

const Page = (props) => {
  const { title, desc } = props;
  useLayoutEffect(() => {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    });
  }, []);
  return (
    <div className={styles.page}>
      <section className="showcase">
        <header>
          <h2 className="logo"></h2>
          <div className="toggle"></div>
        </header>
        <div className="text">
          {/* <h2>{title} </h2> */}
          <h3>{title}</h3>
          <p>{desc}</p>
          <a href="#">Explore</a>
        </div>
        {props.children}
        <ul className="social">
          <li>
            <a href="#">
              <img width={30} src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img width={30} src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img width={30} src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
      </section>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
