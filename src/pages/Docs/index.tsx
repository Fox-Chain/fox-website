import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { connect } from 'umi';

import styles from './index.less';

const Page = (props) => {
  const [docsList, setDocsList] = useState([])
  const [current, setCurrent] = useState(1)
  useEffect(() => {
    getDocs(current);
  },[]);
  const getDocs = (cur) => {
    const { dispatch } = props;
    dispatch({
      type: 'global/getDocs',
      payload: {
        current:cur
      },
      callback: response => {
        if (response.code == 0)
          setDocsList(data=>{return [...data,...response.data]});
      }
    });
  };
  return (
    <div className={styles.page}>
      <div className="site__wrapper">
        {
          docsList.map(item =>
            <div className="grid">
              <div className="card">
                <div className="card__image">
                  <img src={item.HeadImg} alt="" />

                  <div className="card__overlay card__overlay--indigo">
                    <div className="card__overlay-content">
                      {/* <ul className="card__meta">
                      <li><a href="#0"><i className="fa fa-tag"></i> Html5/Css3</a></li>
                      <li><a href="#0"><i className="fa fa-clock-o"></i> 2 min ago</a></li>
                    </ul> */}

                      <a target="_blank" href={item.Website} className="card__title">{item.Title}</a>

                      {/* <ul className="card__meta card__meta--last">
                      <li><a href="#0"><i className="fa fa-user"></i> Mithicher</a></li>
                      <li><a href="#0"><i className="fa fa-facebook-square"></i> Share</a></li>
                    </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>)
        }
      </div>
      {docsList.length>0&&<p style={{ textAlign: 'center' }}>
        <div className='more' onClick={() => {
          setCurrent(data => {
            const newData = data + 1;
            getDocs(newData);
            return newData;
          });
        }}>
          SEE MORE</div>
      </p>}

    </div>
  );
};

export default connect(({ global }) => ({
  global
}))(Page)
