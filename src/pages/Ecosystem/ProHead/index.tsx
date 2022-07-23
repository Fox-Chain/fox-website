import { useLayoutEffect, useRef, useState } from 'react';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { checkStringIsJson } from '@/utils/utils'
import { connect } from 'umi';
import styles from './index.less';

const Page = (props: any) => {
  const { data } = props;
  // useLayoutEffect(() => {
  //   var questions = [
  //     "What are the crazy adventures you want to try in your life?",
  //     "How do you hang toilet paper: over or under?",
  //     "Why is it that round pizzas come in square boxes?",
  //     "If you could have a superpower, what would it be?",
  //     "What secret conspiracy would you like to actually start letting other people know?",
  //     "What do you do to maintain or improve your mental health?",
  //     "If you could remove one colour in the whole world, what would it be and why?",
  //     "Do people drink or eat soup?",
  //     "What would you do if you only had 24 hours to live?",
  //     "Which species would be the rudest if all animals could talk?",
  //     "What do you think your mental health will be like in the future?",
  //     "Do you think the sea is salty because the shore never waves back at it?",
  //     "Where would you like to time travel: back to the past or to the future?",
  //     "Do you believe it is possible to inflate a balloon when underwater?",
  //     "Is mental health more important than physical health?",
  //     "Do you have a habit of going for a walk while sleeping?",
  //     "Have you accidentally glued your hands together when doing a craft project?",
  //     "Would you rather be forced to wear shoes every second of your life or never be able to wear shoes again?"
  //   ];

  //   var cursorBackgrounds = [
  //     "https://media3.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif?cid=790b76113bb746b4204131179218b2fde4957f0b20551378&rid=giphy.gif&ct=g",
  //     "https://media4.giphy.com/media/kPtv3UIPrv36cjxqLs/giphy.gif?cid=790b7611f8f5dcf9176a25b583bbdd78254255b6d51643d1&rid=giphy.gif&ct=g",
  //     "https://media4.giphy.com/media/l0HlUsr30YgIHASl2/giphy.gif?cid=790b7611d31ab08cfa5e3046f529af2d7d58c99bf0b449b2&rid=giphy.gif&ct=g",
  //     "https://media4.giphy.com/media/xUA7b6G577b74RSS3e/giphy.gif?cid=ecf05e47a7sumhjwkxl5u584moobx5f4mlb6040dlzowjkm6&rid=giphy.gif&ct=g",
  //     "https://media3.giphy.com/media/a5viI92PAF89q/giphy.gif?cid=790b7611c4b2fb606863c8b973000ff9812a542d127c5cdb&rid=giphy.gif&ct=g",
  //     "https://media4.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif?cid=ecf05e47jmhordafv96a3d6okxlagswr3ti7buh8pajfhi1a&rid=giphy.gif&ct=g",
  //     "https://media4.giphy.com/media/hv53DaYcXWe3nRbR1A/giphy.gif?cid=ecf05e47jf2zrq2ozzq860irai5m6oam10hakvvd4r0hnkaw&rid=giphy.gif&ct=g"
  //   ], previousBg;

  //   var h1 = document.querySelector('h1');
  //   var btn = document.querySelector('.button');

  //   function init() {
  //     // btn.addEventListener('click', function() {
  //     //   newQuestion();
  //     // })

  //     newQuestion(data.Description);
  //   }

  //   function newQuestion(title) {
  //     h1.innerHTML = title;
  //     var tl = gsap.timeline(), mySplitText = new SplitText(h1, { type: "words,chars" }), chars = mySplitText.chars;

  //     tl.from(chars, {
  //       duration: 0.5,
  //       opacity: 0,
  //       scale: 0,
  //       y: 80,
  //       rotationX: 150,
  //       transformOrigin: "0% 50% -50",
  //       ease: "back",
  //       stagger: 0.01
  //     });
  //   }

  //   var cursor = document.querySelector('.cursor');

  //   function moveCircle(e) {
  //     gsap.set(cursor, {
  //       css: {
  //         left: e.pageX,
  //         top: e.pageY
  //       }
  //     });
  //   }

  //   $(window).on('mousemove', moveCircle);

  //   $('.button').mouseover(function () {
  //     randomBg();
  //     $('.cursor').css('display', 'block');
  //   });

  //   function randomBg() {
  //     var random = Math.floor(Math.random() * cursorBackgrounds.length);

  //     if (random === previousBg) {
  //       if (random == cursorBackgrounds.length) random--
  //       else random++;
  //     }

  //     previousBg = random;
  //     $('.cursor').css('background', 'url(' + cursorBackgrounds[random] + ')');
  //     $('.cursor').css('background-size', 'cover');
  //     $('.cursor').css('background-position', 'center');
  //   }

  //   $('.button').mouseleave(function () {
  //     $('.cursor').css('display', 'none');
  //   });

  //   // init();

  // }, [data])
  return (
    <div className={styles.page}>
      <div className="content-wrapper">
        <p>
          <img className="no-select" src={'/image/' + data.Logo + '.png'} style={{ width: '80px', borderRadius: '100%', marginRight: '15px' }} />
          <span>{data.ProJect}</span>
        </p>
        <p className="spaced heading no-select">
          <div className="project-detail-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* category */}
            <button style={{ marginTop: '0' }} className="search-buttons detail-button">{data.Category}</button>
            {/* subcategory */}
            {
             data&&checkStringIsJson(data)&&eval(data.SubCategorles).map(item => <button style={{ marginTop: '0' }} className="search-buttons detail-button">{item}</button>)
            }
            <div className='twitter'>
              <a target="_blank" href={data.Media}><Twitter />
              </a>

            </div>
          </div>
        </p>
        <h1>{data.Description}</h1>
        <div className="button no-select"><span>Have A Try</span></div>
      </div>

      <div className="cursor"></div>
    </div>
  );
};

export default Page;