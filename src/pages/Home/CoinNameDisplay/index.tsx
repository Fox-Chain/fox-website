import { useLayoutEffect } from 'react';
import styles from './index.less';

const CoinNameDisplay = () => {
  useLayoutEffect(() => {
    const slideTL = gsap.timeline();
    const maskTL = gsap.timeline();
    const mainTL = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        gsap.set('#texttwo', { opacity: 0 });
        gsap.set('#bar', { scaleY: 0.1 });
        gsap.set('#textone', { opacity: 1 });
        gsap.set('#textsix', { opacity: 0 });
        gsap.set('#textfive', { opacity: 0 });
        gsap.set('#textfour', { opacity: 0 });
        gsap.set('#textthree', { opacity: 0 });
      },
    });

    gsap.set('#texttwo', { opacity: 0 });
    gsap.set('#bar', { scaleY: 0.1 });
    gsap.set('#textthree', { opacity: 0 });
    gsap.set('#textfour', { opacity: 0 });
    gsap.set('#textfive', { opacity: 0 });
    gsap.set('#textsix', { opacity: 0 });

    slideTL
      .to('#bar', 1, {
        y: 225,
        scaleY: 1,
        ease: 'back.out',
      })

      .to('#slidebar', 1.5, {
        x: 600,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })
      .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })
      .to('#slidebar', 1.5, {
        x: 600,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })

      //add bar animation
      .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })
      .to('#slidebar', 1.5, {
        x: 600,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })
      .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })
      .to('#slidebar', 1.5, {
        x: 600,
        delay: 0.5,
        ease: 'back.inOut(0.8)',
      })

      .to('#bar', 1, {
        y: 500,
        scaleY: 0.1,
        ease: 'back.in',
      });

    maskTL
      .to('#textone', 1.5, {
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 91% 0, 81% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set('#texttwo', { opacity: 1 });
        },
      })
      .to('#textone', 1.5, {
        delay: 0.5,
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 18% 0, 8% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set('#textone', { opacity: 0 });
          gsap.set('#textthree', { opacity: 1 });
        },
      })
      .to('#textthree', 1.5, {
        delay: 0.5,
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 91% 0, 81% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set('#texttwo', { opacity: 0 });
          gsap.set('#textfour', { opacity: 1 });
        },
      })
      .to('#textthree', 1.5, {
        delay: 0.5,
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 18% 0, 8% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set('#textthree', { opacity: 0 });
          gsap.set('#textfive', { opacity: 1 });
        },
      })
      .to('#textfive', 1.5, {
        delay: 0.5,
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 91% 0, 81% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set('#textfour', { opacity: 0 });
          gsap.set('#textsix', { opacity: 1 });
        },
      })
      .to('#textfive', 1.5, {
        delay: 0.5,
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 18% 0, 8% 100%, 0% 100%)',
        onComplete: () => {
          gsap.set('#textfive', { opacity: 0 });
          gsap.set('#textseven', { opacity: 1 });
        },
      })
      .to('#textseven', 1.5, {
        delay: 0.5,
        ease: 'back.inOut(0.8)',
        'clip-path': 'polygon(0 0, 91% 0, 81% 100%, 0% 100%)',
        // onComplete: () => {
        //     gsap.set('#textfive h1',{ opacity : 0});
        // }
      });

    mainTL.add(slideTL).add(maskTL, 1.5);
  }, []);

  return (
    <div className={styles.coinnamedisplay}>
      <div className="coinnamecontainer">
        <div className="slide-bar" id="slidebar">
          <div className="bar" id="bar"></div>
        </div>
        <div className="text-block" id="textone">
          <h1>HAYEK TECH</h1>
        </div>
        <div className="text-block" id="texttwo">
          <h1>HAS</h1>
        </div>
        <div className="text-block" id="textthree">
          <h1>USDH</h1>
        </div>
        <div className="text-block" id="textfour">
          <h1>EURH</h1>
        </div>
        <div className="text-block" id="textfive">
          <h1>GBPH</h1>
        </div>
        <div className="text-block" id="textsix">
          <h1>JYPH</h1>
        </div>
        <div className="text-block" id="textseven">
          <h1></h1>
        </div>
      </div>

      <button id="changeBtn">&nbsp;</button>
    </div>
  );
};

export default CoinNameDisplay;
