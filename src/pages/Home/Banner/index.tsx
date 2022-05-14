import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import Box1 from '../Box1';
import Box2 from '../Box2';
import Box3 from '../Box3';
import BoxMain from '../BoxMain';

import styles from './index.less';

const Banner = () => {
  useLayoutEffect(() => {
    $(document).ready(function () {
      const $cont = $('.cont');
      const $slider = $('.slider');
      const $nav = $('.nav');
      const winW = $(window).width();
      const animSpd = 750; // Change also in CSS
      const distOfLetGo = winW * 0.2;
      let curSlide = 1;
      let animation = false;
      let autoScrollVar = true;
      let diff = 0;

      // Generating slides
      let arrCities = ['Amsterdam', 'Rome', 'New—York']; // Change number of slides in CSS also
      let numOfCities = arrCities.length;
      let arrCitiesDivided = [];

      arrCities.map((city) => {
        let length = city.length;
        let letters = Math.floor(length / 4);
        let exp = new RegExp('.{1,' + letters + '}', 'g');

        arrCitiesDivided.push(city.match(exp));
      });

      let generateSlide = function (city) {
        let frag1 = $(document.createDocumentFragment());
        let frag2 = $(document.createDocumentFragment());
        const numSlide = arrCities.indexOf(arrCities[city]) + 1;
        const firstLetter = arrCitiesDivided[city][0].charAt(0);

        const $slide =
          $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
                  <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
                  <div class="slide__text-wrapper slide--${numSlide}__text-wrapper"></div>
                </div>`);

        const letter = $(`<div class="slide__letter slide--${numSlide}__letter">
                  ${firstLetter}
                </div>`);

        for (
          let i = 0, length = arrCitiesDivided[city].length;
          i < length;
          i++
        ) {
          const text = $(`<div class="slide__text slide__text--${i + 1}">
                    ${arrCitiesDivided[city][i]}
                  </div>`);
          frag1.append(text);
        }

        const navSlide = $(
          `<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`,
        );
        frag2.append(navSlide);
        $nav.append(frag2);
        $slide.find(`.slide--${numSlide}__text-wrapper`).append(Box1);
        // $slider.append($slide);

        if (arrCities[city].length <= 4) {
          $('.slide--' + numSlide)
            .find('.slide__text')
            .css('font-size', '12vw');
        }
      };

      for (let i = 0, length = numOfCities; i < length; i++) {
        generateSlide(i);
      }

      $('.nav__slide--1').addClass('nav-active');

      // Navigation
      function bullets(dir) {
        $('.nav__slide--' + curSlide).removeClass('nav-active');
        $('.nav__slide--' + dir).addClass('nav-active');
      }

      function timeout() {
        animation = false;
      }

      function pagination(direction) {
        animation = true;
        diff = 0;
        $slider.addClass('animation');
        $slider.css({
          transform:
            'translate3d(-' + (curSlide - direction) * 100 + '%, 0, 0)',
        });

        $slider.find('.slide__darkbg').css({
          transform: 'translate3d(' + (curSlide - direction) * 50 + '%, 0, 0)',
        });

        $slider.find('.slide__letter').css({
          transform: 'translate3d(0, 0, 0)',
        });

        $slider.find('.slide__text').css({
          transform: 'translate3d(0, 0, 0)',
        });
      }

      function navigateRight() {
        if (!autoScrollVar) return;
        if (curSlide >= numOfCities) return;
        pagination(0);
        setTimeout(timeout, animSpd);
        bullets(curSlide + 1);
        curSlide++;
      }

      function navigateLeft() {
        if (curSlide <= 1) return;
        pagination(2);
        setTimeout(timeout, animSpd);
        bullets(curSlide - 1);
        curSlide--;
      }

      function toDefault() {
        pagination(1);
        setTimeout(timeout, animSpd);
      }

      // Events
      $(document).on('mousedown touchstart', '.slide', function (e) {
        if (animation) return;
        let target = +$(this).attr('data-target');
        let startX = e.pageX || e.originalEvent.touches[0].pageX;
        $slider.removeClass('animation');

        $(document).on('mousemove touchmove', function (e) {
          let x = e.pageX || e.originalEvent.touches[0].pageX;
          diff = startX - x;
          if (
            (target === 1 && diff < 0) ||
            (target === numOfCities && diff > 0)
          )
            return;

          $slider.css({
            transform:
              'translate3d(-' + ((curSlide - 1) * 100 + diff / 30) + '%, 0, 0)',
          });

          $slider.find('.slide__darkbg').css({
            transform:
              'translate3d(' + ((curSlide - 1) * 50 + diff / 60) + '%, 0, 0)',
          });

          $slider.find('.slide__letter').css({
            transform: 'translate3d(' + diff / 60 + 'vw, 0, 0)',
          });

          $slider.find('.slide__text').css({
            transform: 'translate3d(' + diff / 15 + 'px, 0, 0)',
          });
        });
      });

      $(document).on('mouseup touchend', function (e) {
        $(document).off('mousemove touchmove');

        if (animation) return;

        if (diff >= distOfLetGo) {
          navigateRight();
        } else if (diff <= -distOfLetGo) {
          navigateLeft();
        } else {
          toDefault();
        }
      });

      $(document).on('click', '.nav__slide:not(.nav-active)', function () {
        let target = +$(this).attr('data-target');
        bullets(target);
        curSlide = target;
        pagination(1);
      });

      $(document).on('click', '.side-nav', function () {
        let target = $(this).attr('data-target');

        if (target === 'right') navigateRight();
        if (target === 'left') navigateLeft();
      });

      $(document).on('keydown', function (e) {
        if (e.which === 39) navigateRight();
        if (e.which === 37) navigateLeft();
      });

      $(document).on('mousewheel DOMMouseScroll', function (e) {
        if (animation) return;
        let delta = e.originalEvent.wheelDelta;

        if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
        if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
      });
    });
  }, []);

  return (
    <div className={styles.banner}>
      <Logo className={styles.logo} />
      <div className="cont">
        <div className="slider">
          <div data-target="1" className="slide slide--1">
            <div className="slide__text-wrapper slide--1__text-wrapper">
              <BoxMain
                title="A Fully EVM-compatible zk-Rollup Layer 2 for Ethereum"
                desc="Fox uses ZK-EVM, which is exactly equivalent to EVM used by Ethereum L1 consensus, and is seamlessly compatible with all Ethereum DApps."
              >
                <Box2 />
              </BoxMain>
            </div>
          </div>
          <div data-target="2" className="slide slide--2">
            <div className="slide__text-wrapper slide--2__text-wrapper">
              <BoxMain
                title="General purpose, Permissionless and Decentralized"
                desc="On Fox, developers can easily implement any business using Solidity smart contract, and deploy it permissionlessly."
              >
                <Box3 />
              </BoxMain>
            </div>
          </div>
          <div data-target="3" className="slide slide--3">
            <div className="slide__text-wrapper slide--3__text-wrapper">
              <BoxMain
                title="zk-SNARK & zk-Porter validity proofs"
                desc="Fox scales Ethereum with zk-SNARK & zk-Porter to implement the Ethereum-secure, fast, low marginal gas cost, and seamless user experience."
              >
                <Box1 />
              </BoxMain>
            </div>
          </div>
        </div>
        <ul className="nav"></ul>
      </div>
    </div>
  );
};

export default Banner;
