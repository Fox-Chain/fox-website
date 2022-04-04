import { useEffect } from 'react';
import styles from './index.less';
import { FaTelegram } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { FiTwitter } from 'react-icons/fi';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Youtube } from './youtube.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="telegram" href="#">
                    {/* <i className="fa fa-facebook"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'telegramicon' }}
                    >
                      <div>
                        <Github style={{ width: '40px', height: '40px' }} />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    {/* <i className="fa fa-twitter"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'twittericon' }}
                    >
                      <div>
                        <Twitter style={{ width: '40px', height: '40px' }} />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    {/* <i className="fa fa-dribbble"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'mediumicon' }}
                    >
                      <div>
                        <Youtube style={{ width: '40px', height: '40px' }} />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
