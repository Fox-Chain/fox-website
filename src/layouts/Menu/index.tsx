import { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Box } from '@/assets/box.svg';

import styles from './index.less';

const Page = () => {
  return (
    <div className={styles.page}>
      <nav id="menu">
        <div className="menu-item">
          <div className="menu-text">
            <a href="">Developers</a>
          </div>
          <div className="sub-menu triple" style={{ height: '20em' }}>
            <div
              className="top-container gb c icon-box"
              style={{ height: '3em' }}
            >
              <div className="icon big">
                <i className="far fa-book"></i>
              </div>
              <div className="text">
                <div className="title">Where to start</div>
                <div className="sub-text">How to start the development</div>
              </div>
            </div>
            <div className="box">
              <h3>Your Journey</h3>
              <a href="#">Get Started</a>
              <a href="#">Learn the Basics</a>
              <a href="#">Get Advanced</a>
            </div>
            <div className="box">
              <h3>Your Tools</h3>
              <a href="#">Turbo Editor</a>
              <a href="#">Time Stopper</a>
              <a href="#">Brain Enhancer</a>
            </div>
            <div style={{ width: '100%', height: '1em' }}></div>
            <div style={{ width: '100%', height: '1em' }}></div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-plug"></i>
              </div>
              <div className="text">
                <div className="title">
                  API Guide <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-comments"></i>
              </div>
              <div className="text">
                <div className="title">
                  Support Line <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-phone-volume"></i>
              </div>
              <div className="text">
                <div className="title">
                  Live Chat <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="icon-box flat">
              <div className="icon">
                <i className="fal fa-book-spells"></i>
              </div>
              <div className="text">
                <div className="title">
                  Documentation <i className="far fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="/ecosystem">Ecosystem</a>
          </div>
          <div className="sub-menu double" style={{ height: '20em' }}>
            <div
              className="top-container gb c icon-box"
              style={{ height: '4.5em' }}
            >
              <div className="icon big">
                <i className="far fa-book"></i>
              </div>
              <div className="text">
                <div className="title">Where to start</div>
                <div className="sub-text">Get started to find projects</div>
              </div>
            </div>
            <div className="icon-box gb a">
              <div className="icon">
                <i className="far fa-question-circle"></i>
              </div>
              <div className="text">
                <div className="title">
                  DeFi <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  {' '}
                  DEX, Lending, Stablecoin, Derivatives, Payment
                </div>
              </div>
            </div>
            <div className="icon-box gb b">
              <div className="icon">
                <i className="far fa-users-class"></i>
              </div>
              <div className="text">
                <div className="title">
                  DEX <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">AMM, Orderbook</div>
              </div>
            </div>
            <div className="icon-box gb c">
              <div className="icon">
                <i className="far fa-school"></i>
              </div>
              <div className="text">
                <div className="title">
                  NFT <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  Art, Collectibles, Virtual Worlds
                </div>
              </div>
            </div>
            <div className="icon-box gb d">
              <div className="icon">
                <i className="far fa-chess-rook"></i>
              </div>
              <div className="text">
                <div className="title">
                  Game <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">P2E, GameFi, Metaverse</div>
              </div>
            </div>
            <div className="icon-box gb e">
              <div className="icon">
                <i className="far fa-video-plus"></i>
              </div>
              <div className="text">
                <div className="title">
                  Web3.0 <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">Social Media, Music, Sports</div>
              </div>
            </div>
            <div className="icon-box gb f">
              <div className="icon">
                <i className="far fa-cat"></i>
              </div>
              <div className="text">
                <div className="title">
                  Infrastructure <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">DAO, Bridge, Oracle, Tools</div>
              </div>
            </div>
            {/* <div className="sub-menu-holder ecosys">
              <div><span> Ready to dive in?</span></div>
              <div><a className='gs' href="#">Get Started</a> </div>
            </div> */}
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-text">
            <a href="#">Community</a>
          </div>
          <div className="sub-menu">
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-wind-turbine"></i>
              </div>
              <div className="text">
                <div className="title">
                  Events <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  Online and spot events for developers and users
                </div>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <i className="fal fa-lightbulb-on"></i>
              </div>
              <div className="text">
                <div className="title">
                  News<i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  Broadcasting the latest message and activity
                </div>
              </div>
            </div>
            <div className="icon-box" style={{ height: '4.3em' }}>
              <div className="icon">
                <i className="fal fa-bomb"></i>
              </div>
              <div className="text">
                <div className="title">
                  Socials <i className="far fa-arrow-right"></i>
                </div>
                <div className="sub-text">
                  Twitter, Discord, Telegram, Youtube, Medium
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
