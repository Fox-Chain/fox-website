import { useEffect, useMemo } from 'react';
import { ReactComponent as HAS } from '@/static_assets/logos/coins/HAS-LOGO.svg';
import { ReactComponent as CHFH } from '@/static_assets/logos/coins/CHFH-ICON.svg';
import { ReactComponent as EURH } from '@/static_assets/logos/coins/EURH-ICON.svg';
import { ReactComponent as GBPH } from '@/static_assets/logos/coins/GBPH-ICON.svg';
import { ReactComponent as JPYH } from '@/static_assets/logos/coins/JPYH-ICON.svg';
import { ReactComponent as KRWH } from '@/static_assets/logos/coins/KRWH-ICON.svg';
import { ReactComponent as USDH } from '@/static_assets/logos/coins/USDH-ICON.svg';

import styles from './index.less';

interface CircleProps {
  title: string;
  subtitle: string;
  dataInfo: string;
  dataIndex: string;
  icon: any;
}

const Circle: React.FC<CircleProps> = ({
  title,
  subtitle,
  dataInfo,
  dataIndex,
  icon,
}) => {
  return (
    <div className="module">
      <div className="circle node" data-info={dataInfo} data-index={dataIndex}>
        {/* <div className="subtitle">{subtitle}</div>
        <h4 className="title is-4">{<CHFH />}title</h4> */}
        {icon}
      </div>
      {/* <div className="leaf"></div> */}
    </div>
  );
};

const Second = () => {
  useEffect(() => {
    const $map = document.querySelector('.map');
    const $nodes = document.querySelectorAll('.node');
    const $introModal = document.getElementById('introModal');
    const $introModalBackground = document.getElementById(
      'introModalBackground',
    );
    const $introModalClose = document.getElementById('introModalClose');
    const $introModalTitle = document.getElementById('introModalTitle');
    const $introModalDescription = document.getElementById(
      'introModalDescription',
    );
    const $introModalIcon = document.getElementById('introModalIcon');
    const $introModalPrev = document.getElementById('introModalPrev');
    const $introModalNext = document.getElementById('introModalNext');

    let moduleData = [];
    let currentIndex = 0;
    let maxIndex = 6;

    // Close event binding
    [$introModalBackground, $introModalClose].forEach((elem) => {
      elem &&
        elem.addEventListener('click', () => {
          $introModal && $introModal.classList.remove('is-active');
        });
    });

    $introModalPrev &&
      $introModalPrev.addEventListener('click', () => {
        showModal(currentIndex > 0 ? currentIndex - 1 : maxIndex);
      });

    $introModalNext &&
      $introModalNext.addEventListener('click', () => {
        showModal(currentIndex < maxIndex ? currentIndex + 1 : 0);
      });

    // Bind events to all module nodes
    $nodes.forEach(($node) => {
      // Store module data in array
      console.log($node.dataset);
      moduleData[$node.dataset.index] = JSON.parse($node.dataset.info);

      // Hover
      ['mouseenter', 'mouseleave'].forEach((mouseEvent) => {
        $node.addEventListener(mouseEvent, () => {
          // Toggle pause
          [$map, $node, $node.parentNode].forEach(($element) => {
            $element && $element.classList.toggle('pause');
          });
        });
      });

      // Click
      $node.addEventListener('click', () => {
        showModal($node.dataset.index);
      });
    });

    const showModal = (index) => {
      currentIndex = Number(index);
      const data = moduleData[currentIndex];

      $introModalTitle &&
        ($introModalTitle.innerText = data.subtitle || data.title);
      $introModalDescription &&
        ($introModalDescription.innerText = data.description);
      $introModalIcon &&
        ($introModalIcon.className = `fal fa-${data.icon} fa-10x`);
      $introModal && $introModal.classList.add('is-active');

      if (isOverflowing($introModalDescription)) {
        $introModalDescription &&
          $introModalDescription.classList.add('is-overflowing');
      } else {
        $introModalDescription &&
          $introModalDescription.classList.remove('is-overflowing');
      }
    };

    const isOverflowing = (elem) => {
      return elem.scrollHeight > elem.clientHeight;
    };
  }, []);

  return (
    <div className={styles.second}>
      <div className="map circle-graphic">
        {/* <div className="layer ellipses">
          <div className="ellipsis"></div>
          <div className="ellipsis"></div>
          <div className="ellipsis"></div>
          <div className="circle is-cover"></div>
        </div> */}
        <div className="layer">
          <div className="circle is-second"></div>
        </div>
        <div className="layer">
          <div className="circle is-third"></div>
        </div>
        <div className="layer layer-third">
          <Circle
            title="Decollateralize"
            subtitle=""
            dataIndex="1"
            icon={<CHFH style={{ display: 'block' }} />}
            dataInfo='{"title":"","icon":"gamepad","description":"INNOU launches a Crypto Currency use case, where users can playfully gather and earn cryptocurrencies in a GPS map-based game. For businesses using the digital layer we are placing over the real world is a completely new form of marketing, which ultimately leads to more effective and more successful advertisement and marketing campaigns. On the user’s side it offers an innovative gaming experience combined with a revolutionized approach of purchasing.\n    "}'
          />
          <Circle
            title="Market Operation"
            subtitle=""
            dataIndex="2"
            icon={<EURH style={{ display: 'block' }} />}
            dataInfo='{"title":"Market Operation","icon":"tv-retro","description":"For providing content and information about the latest crypto technology, sustainable innovation and updates from the ecosystem we launch our own INNOU CHANNEL. Before the INNOU Channel is launched in the INNOU mobile app we will provide streams on web video and social media platforms. Once the mobile app is launched users can send their individually created content and earn money in return. The long-term vision is to become a global media library filled with high quality content.\n    "}'
          />
          <Circle
            title="Buyback"
            subtitle=""
            dataIndex="3"
            icon={<GBPH style={{ display: 'block' }} />}
            dataInfo='{"title":"Buyback","icon":"broadcast-tower","description":"This module supports every medium that focuses on audio-based content. A variety of channels allows INNOU and its users to upload their own content. Artists can receive direct payment for their work by donations from other users. In addition to that other user’s comments can be rewarded with donations as well. With an ‘on demand’ service INNOU is aiming to provide a wide range of music, free to listen for the community.\n    "}'
          />
          <Circle
            title="Equilibrium "
            subtitle=""
            dataIndex="4"
            icon={<JPYH style={{ display: 'block' }} />}
            dataInfo='{"title":"Equilibrium","icon":"comments","description":"For communication within the INNOU ecosystem we will offer an encrypted chat function. Connecting people all over the word, making friends and building up a striving community together is our vision. The chat is integrated in all INNOU modules. It can be used to share game achievements and instant chatting for all purposes. With hashtags and links users can discuss prices, money transfers and any content within the app\n    "}'
          />
          <Circle
            title="Recollateralize"
            subtitle=""
            dataIndex="5"
            icon={<KRWH style={{ display: 'block' }} />}
            dataInfo='{"title":"Recollateralize","icon":"users","description":"For our INNOU Ecosystem to be complete we are building a social platform where users can communicate, connect and share their ideas. Users can choose if they want their profile to be used for casual social media experience or freelancing and promotion or posting and publishing their content. This can be anything from art to blogs, journalistic reports, music and any other mediums of work. To foster intrinsic motivation annual awards for the best publications will be submitted on our platform. Moreover, we will launch our first newspaper, which will be authored solely by members of the INNOU community.\n    "}'
          />
          <Circle
            title="Arbitrage"
            subtitle=""
            dataIndex="6"
            icon={<USDH style={{ display: 'block' }} />}
            dataInfo='{"title":"Arbitrage","icon":"coins","description":"INNOU is the newest currency in the crypto market. Its availability will stretch throughout our Pre-ICO and ICO phase. Our purpose is to create opportunities of token utilization in everyday lives and encourage the empowerment of a wide global market. Further details for INNOU Token, Smart Contract and Pre-ICO and ICO formula are stated under the ‘INNOU Token’ chapter.\n    "}'
          />
        </div>
        {/* <div className="layer layer-third-out">
          <CircleOut
            title="Decollateralize"
            subtitle=""
            dataIndex="1"
            dataInfo='{"title":"Decollateralize","icon":"gamepad","description":"INNOU launches a Crypto Currency use case, where users can playfully gather and earn cryptocurrencies in a GPS map-based game. For businesses using the digital layer we are placing over the real world is a completely new form of marketing, which ultimately leads to more effective and more successful advertisement and marketing campaigns. On the user’s side it offers an innovative gaming experience combined with a revolutionized approach of purchasing.\n    "}'
          />
          <CircleOut
            title="Market Operation"
            subtitle=""
            dataIndex="2"
            dataInfo='{"title":"Market Operation","icon":"tv-retro","description":"For providing content and information about the latest crypto technology, sustainable innovation and updates from the ecosystem we launch our own INNOU CHANNEL. Before the INNOU Channel is launched in the INNOU mobile app we will provide streams on web video and social media platforms. Once the mobile app is launched users can send their individually created content and earn money in return. The long-term vision is to become a global media library filled with high quality content.\n    "}'
          />
          <CircleOut
            title="Buyback"
            subtitle=""
            dataIndex="3"
            dataInfo='{"title":"Buyback","icon":"broadcast-tower","description":"This module supports every medium that focuses on audio-based content. A variety of channels allows INNOU and its users to upload their own content. Artists can receive direct payment for their work by donations from other users. In addition to that other user’s comments can be rewarded with donations as well. With an ‘on demand’ service INNOU is aiming to provide a wide range of music, free to listen for the community.\n    "}'
          />
          <CircleOut
            title="Equilibrium "
            subtitle=""
            dataIndex="4"
            dataInfo='{"title":"Equilibrium","icon":"comments","description":"For communication within the INNOU ecosystem we will offer an encrypted chat function. Connecting people all over the word, making friends and building up a striving community together is our vision. The chat is integrated in all INNOU modules. It can be used to share game achievements and instant chatting for all purposes. With hashtags and links users can discuss prices, money transfers and any content within the app\n    "}'
          />
          <CircleOut
            title="Recollateralize"
            subtitle=""
            dataIndex="5"
            dataInfo='{"title":"Recollateralize","icon":"users","description":"For our INNOU Ecosystem to be complete we are building a social platform where users can communicate, connect and share their ideas. Users can choose if they want their profile to be used for casual social media experience or freelancing and promotion or posting and publishing their content. This can be anything from art to blogs, journalistic reports, music and any other mediums of work. To foster intrinsic motivation annual awards for the best publications will be submitted on our platform. Moreover, we will launch our first newspaper, which will be authored solely by members of the INNOU community.\n    "}'
          />
          <CircleOut
            title="Arbitrage"
            subtitle=""
            dataIndex="6"
            dataInfo='{"title":"Arbitrage","icon":"coins","description":"INNOU is the newest currency in the crypto market. Its availability will stretch throughout our Pre-ICO and ICO phase. Our purpose is to create opportunities of token utilization in everyday lives and encourage the empowerment of a wide global market. Further details for INNOU Token, Smart Contract and Pre-ICO and ICO formula are stated under the ‘INNOU Token’ chapter.\n    "}'
          />
        </div> */}
        <div className="layer layer-main">
          <div
            className="circle node is-main"
            data-info='{"title":"INNOU ID","subtitle":"Algorithmic Moneytary Tools","icon":"wallet","main":true,"description":"Our integrated wallet allows users to directly do in-app transactions. Within the game the collected cryptocurrencies will automatically be stored in the INNOU wallet. Additionally, users can also make purchases at real shops that accept crypto-currencies. The wallet will feature TOP 20 cryptocurrencies to date, including our green coin for building the trees.\n    "}'
            data-index="0"
          >
            <h2 className="title is-2"></h2>
            <div className="subtitle is-strong main-title">
              <HAS style={{ display: 'block', width: '231px' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="introModal">
        <div className="modal-background" id="introModalBackground"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title">
              <span></span>
              <span className="is-strong" id="introModalTitle"></span>
            </div>
            <button
              className="delete"
              id="introModalClose"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column">
                <p id="introModalDescription"></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Second;
