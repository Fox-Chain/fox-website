import { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineDownload } from 'react-icons/hi';
import styles from './index.less';

const CardHover = () => {
  useEffect(() => {
    Vue.config.devtools = true;

    const cardRotationFactor = 1.0 / 4.0;
    Vue.component('card', {
      template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
      mounted() {
        this.width = this.$refs.card.offsetWidth;
        this.height = this.$refs.card.offsetHeight;
      },
      props: ['dataImage'],
      data: () => ({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null,
      }),

      computed: {
        mousePX() {
          return this.mouseX / this.width;
        },
        mousePY() {
          return this.mouseY / this.height;
        },
        cardStyle() {
          const rX = this.mousePX * 30;
          const rY = this.mousePY * -30;
          return {
            transform: `rotateY(${(cardRotationFactor * rX) / 3}deg) rotateX(${
              (cardRotationFactor * rY) / 5
            }deg)`,
          };
        },
        cardBgTransform() {
          const tX = this.mousePX * -40;
          const tY = this.mousePY * -40;
          return {
            transform: `translateX(${
              (2 * cardRotationFactor * tX) / 3
            }px) translateY(${(2 * cardRotationFactor * tY) / 5}px)`,
          };
        },
        cardBgImage() {
          return this.dataImage
            ? {}
            : {
                backgroundImage: `url(${this.dataImage})`,
              };
        },
      },

      methods: {
        handleMouseMove(e) {
          this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
          this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
          clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
          this.mouseLeaveDelay = setTimeout(() => {
            this.mouseX = 0;
            this.mouseY = 0;
          }, 1000);
        },
      },
    });

    const app = new Vue({
      el: '#app',
    });
  }, []);
  return (
    <div className={styles.cardhover}>
      <div id="app" className="vue-container">
        <card data-image="">
          <h1 slot="header">Mint</h1>
          <p slot="content" className="content">
            <FiArrowRight size={38} />
            <span className="text-2xl">USDH</span>
          </p>
        </card>
        <card data-image="">
          <h1 slot="header">Redeem</h1>
          <p slot="content" className="content">
            <span className="text-2xl">USDH</span>
            <FiArrowRight size={38} />
          </p>
        </card>
        <card data-image="">
          <h1 slot="header">Staking</h1>
          <p slot="content" className="content">
            <span className="text-2xl">USDH</span>
            <HiOutlineDownload size={32} />
          </p>
        </card>
      </div>
    </div>
  );
};

export default CardHover;
