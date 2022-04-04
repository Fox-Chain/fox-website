import { useEffect, useRef } from 'react';
import Slinky from '../Slinky';
import World from './world';
import CardHover from '../CardHover';
import Button from '../Button';
import Title from '../Title';
import styles from './index.less';
import { ReactComponent as LogoSVG } from '@/static_assets/logos/coins/hayek-logo-yellow.svg';

const Logo = () => {
  return (
    <div className="hayek-logo">
      <LogoSVG width="115" height="100" viewBox="0 0 1500 500" />
    </div>
  );
};
const GoStarted = () => {
  return (
    <a target="_blank" href="https://app.hayek.tech/">
      <div className="gostarted">GET STARTED</div>
    </a>
  );
};
const Banner = () => {
  // useEffect(() => {
  //   const world = new World({
  //     canvas: document.querySelector('canvas.webgl'),
  //     cameraPosition: { x: 0, y: 0, z: 4.5 },
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });

  //   world.loop();
  // }, []);

  const startBtnRef = useRef<HTMLButtonElement>(undefined!);
  useEffect(() => {
    startBtnRef.current.click();
  }, []);

  return (
    <div className={styles.banner}>
      {/* <canvas className="webgl"></canvas> */}

      <Slinky />
      <Logo />
      <GoStarted />
      <Button
        render={
          <button
            id="play-music"
            className="button effect effect-2 w-m"
            ref={startBtnRef}
          >
            Start
          </button>
        }
      />
      <div className="title-wrapper">
        <Title />
      </div>
      {/* <div className="card-hover">
        <CardHover />
      </div> */}
      <div className="btn">
        <div>
          <a href="#" target="_blank" title="">
            WhitePaper
          </a>
          <a href="#" target="_blank" title="">
            Github
          </a>
          <a href="#" target="_blank" title="">
            Twitter
          </a>
        </div>
        <div>
          <a href="#" target="_blank" title="">
            Discord
          </a>
          <a href="#" target="_blank" title="">
            Telegram
          </a>
          <a href="#" target="_blank" title="">
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
