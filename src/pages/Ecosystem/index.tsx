import { useLayoutEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Favorite } from '@/assets/favorite.svg';
import { ReactComponent as OpenInNew } from '@/assets/open_in_new.svg';
import { ReactComponent as Github } from '@/assets/github.svg';
import { connect } from 'umi';
import { Tag, Affix } from 'antd';
import ProHead from './ProHead';
import ClipPathHover from './ClipPathHover';
import Count from './count';
import MediaItem from './MediaItem';
import { ArrToKv } from '@/utils/utils'
import styles from './index.less';

const Page = (props) => {
  const [projectList, setProjectList] = useState([])
  const [visibal, setVisibal] = useState(true)
  const [currentProject, setCurrentProject] = useState({})
  const [categoriesList, setCategoriesList] = useState([
    {
      key: 'DeFi',
      value: '0',
      checked: false
    },
    {
      key: 'Web3',
      value: '0',
      checked: false
    },
    {
      key: 'NFTs',
      value: '0',
      checked: false
    },
    {
      key: 'Infrastructure',
      value: '0',
      checked: false
    }
  ])
  const [subCategoriesList, setSubCategoriesList] = useState([
    {
      key: 'Dao',
      value: '0',
      checked: false
    },
    {
      key: 'Wallet',
      value: '0',
      checked: false
    },
    {
      key: 'Gaming',
      value: '0',
      checked: false
    },
    {
      key: 'Payment',
      value: '0',
      checked: false
    },
    {
      key: 'Metaverse',
      value: '0',
      checked: false
    },
    {
      key: 'Fashion',
      value: '0',
      checked: false
    },
    {
      key: 'Tooling',
      value: '0',
      checked: false
    },
    {
      key: 'Marketplace',
      value: '0',
      checked: false
    },
    {
      key: 'Collectibles',
      value: '0',
      checked: false
    },
    {
      key: 'Liquidity',
      value: '0',
      checked: false
    },
    {
      key: 'Yield',
      value: '0',
      checked: false
    },
    {
      key: 'Trading',
      value: '0',
      checked: false
    }
  ])
  useLayoutEffect(() => {
    getProject(1,20,'Web3');
    getCategory();
    const wrapper = document.querySelector(".wrapper");
    const header = document.querySelector(".header");

    wrapper.addEventListener("scroll", (e) => {
      e.target.scrollTop > 30
        ? header.classList.add("header-shadow")
        : header.classList.remove("header-shadow");
    });

    const toggleButton = document.querySelector(".dark-light");

    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    const projectCards = document.querySelectorAll(".project-card");
    const logo = document.querySelector(".logo");
    const projectLogos = document.querySelector(".project-logos");
    const projectDetailTitle = document.querySelector(
      ".project-explain-content .project-card-title"
    );
    const projectBg = document.querySelector(".project-bg");

    // projectCards.forEach((projectCard) => {
    //   projectCard.addEventListener("click", () => {
    //     const number = Math.floor(Math.random() * 10);
    //     const url = `https://unsplash.it/640/425?image=${number}`;
    //     projectBg.src = url;

    //     const logo = projectCard.querySelector("svg");
    //     const bg = logo.style.backgroundColor;
    //     console.log(bg);
    //     projectBg.style.background = bg;
    //     const title = projectCard.querySelector(".project-card-title");
    //     projectDetailTitle.textContent = title.textContent;
    //     projectLogos.innerHTML = logo.outerHTML;
    //     wrapper.classList.add("detail-page");
    //     wrapper.scrollTop = 0;
    //   });
    // });

    logo.addEventListener("click", () => {
      wrapper.classList.remove("detail-page");
      wrapper.scrollTop = 0;
      projectBg.style.background = bg;
    });
  }, []);

  const getProject = (current=1,pageSize=20,values="", subtype="",ext="") => {
    const { dispatch } = props;
    dispatch({
      type: 'global/getProject',
      payload: {
        current,
        pageSize,
        Category: values,
        SubCategorles:subtype,
        ProJect:ext,
      },
      callback: response => {
        if (response.code == 0)
          setProjectList(response.data);
        // getCategory();

      }
    });
  };
  const getCategory = () => {
    const { dispatch } = props;
    dispatch({
      type: 'global/getCategory',
      callback: response => {
        if (response.code == 0) {
          setCurrentProject(ArrToKv(response.data, 'key', 'value'))
        }
      }
    });
  };
  // 多选按钮选中
  const CateGoryChecked = (index, flag) => {
    setCategoriesList(data => {
      let newData = data.map((item, indexC) => {
        if (index == indexC) {
          item.checked = flag;
        }
        return item;
      })
      getProject(1,20,newData.filter(item => item.checked).map(item => item.key).join('\',\''), subCategoriesList.filter(item => item.checked).map(item => item.key).join(','))
      return newData;
    })

  }
  // 多选按钮选中
  const SubCateGoryChecked = (index, flag) => {
    setSubCategoriesList(data => {
      debugger
      let newData = data.map((item, indexC) => {
        if (index == indexC) {
          item.checked = flag;
        }
        return item;
      })
      getProject(1,20,categoriesList.filter(item => item.checked).map(item => item.key).join('\',\''), newData.filter(item => item.checked).map(item => item.key).join(','))
      return newData;
    })

  }

  return (
    <div className={styles.page}>
      <div className='dark-mode'>
        <div className="project">
          <div className="header" hidden>
            <div className="logo">
              <a href="/"> <Logo /></a>
            </div>
            <div className="header-menu">
              <a href="#" className="active">Find project</a>
              <a href="#">Company Review</a>
              <a href="#">Find Salaries</a>
            </div>
            <div className="user-settings">
              <div className="dark-light">
                <svg viewBox="0 0 24 24" stroke="var(--subtitle-color)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              </div>
              <div className="user-menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--subtitle-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-square">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
              </div>
              <img className="user-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
              <div className="user-name">Suhayel Nasim</div>
            </div>
          </div>
          <div className="wrapper">
            <div className="search-menu">
              <div className="search-bar">
                {
                  categoriesList?.map((item,index) => item.checked &&
                  <button style={{marginTop:'0'}} className="search-buttons detail-button"> {item.key}&nbsp;<span onClick={()=>CateGoryChecked(index,false)} style={{cursor:'pointer'}}>X</span> </button>
                  )
                }
                {
                  subCategoriesList?.map((item,index) => item.checked &&
                  <button style={{marginTop:'0'}} className="search-buttons detail-button"> {item.key}&nbsp;<span  onClick={()=>SubCateGoryChecked(index,false)} style={{cursor:'pointer'}}>X</span></button>
                  )
                }
                <input onChange={e=>{
                  getProject(1,20,categoriesList.filter(item => item.checked).map(item => item.key).join('\',\''), subCategoriesList.filter(item => item.checked).map(item => item.key).join(','),e.target.value)
                }} type="text" className="search-box" />

              </div>
              {/* <div className="search-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--subtitle-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Londontowne, MD
              </div>
              <div className="search-project">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--subtitle-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
                <input type="text" placeholder="project Type" />
              </div>
              <div className="search-salary">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="var(--subtitle-color)" fill="var(--subtitle-color)" stroke-width=".4">
                  <path d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z" stroke="var(--subtitle-color)" />
                  <path d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z" stroke="var(--subtitle-color)" />
                  <path d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z" stroke="var(--subtitle-color)" />
                  <path d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z" stroke="var(--subtitle-color)" /></svg>
                <input type="text" placeholder="Salary Range" />
              </div> */}
              <button className="search-button">Find project</button>
            </div>
            <div className="main-container">
              <div className="search-type">
                <div className="alert">
                  <div className="alert-title">Create Project</div>
                  <div className="alert-subtitle">submint project on Fox</div>
                  <button className="search-buttons">Submint Project</button>
                </div>
                <div className="project-time">
                  <div className="project-time-title">Categories</div>
                  <div className="project-wrapper">
                    {
                      categoriesList?.map((item, index) => {
                        return  <div className="type-container">
                          <input checked={item.checked} onChange={e => CateGoryChecked(index, e.target.checked)} type="checkbox" id={"project" + index} className="project-style" />
                          <label for={"project" + index}>{item.key}</label>
                          <span className="project-number">{currentProject[item.key] || 0}</span>
                        </div>
                      })
                    }
                  </div>
                </div>
                <div className="project-time">
                  <div className="project-time-title">Subcategories</div>
                  <div className="project-wrapper">
                    {
                      subCategoriesList.map((item, index) => {

                        return <div className="type-container">
                          <input checked={item.checked} onChange={e => SubCateGoryChecked(index, e.target.checked)} type="checkbox" id={"projects" + index} className="project-style" />
                          <label for={"projects" + index}>{item.key}</label>
                          <span className="project-number"><Count type={item.key == 'Dao' && 'DAO' || item.key} /></span>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="searched-projects">
                <div className="searched-bar">
                  <div className="searched-show">Showing {projectList?.length} Projects</div>
                  <div className="searched-sort">Sort by: <span className="post-time">Newest Post </span><span className="menu-icon">▼</span></div>
                </div>
                {
                  visibal && <div className="project-cards">
                    {
                      projectList && projectList.map(item =>
                        <div className="project-card" onClick={() => { setVisibal(false); setCurrentProject(item) }}>
                          <div className="project-card-header">
                            <img src={'/image/' + item.Logo + '.png'} />
                            <span>{item.ProJect}</span>
                          </div>

                          <div className="project-detail-buttons">
                            {/* category */}
                            <button className="search-buttons detail-button">{item.Category}</button>
                            {/* subcategory */}
                            {
                              eval(item.SubCategorles).map(item => <button className="search-buttons detail-button">{item}</button>)
                            }
                          </div>
                          <div className="project-card-buttons">
                            <button className="search-buttons card-buttons-msg"><Favorite /> Like</button>
                            <button className="search-buttons card-buttons-msg"><OpenInNew /> Website</button>
                          </div>
                        </div>)
                    }
                  </div> || <div className="project-overview">
                    <div className="project-overview-cards">

                      {
                        projectList && projectList.map(item =>
                          <div className="project-overview-card" onClick={() => { setVisibal(false); setCurrentProject(item) }}>
                            <div className="project-card overview-card">
                              <div className="overview-wrapper">
                                <img style={{ marginRight: '10px' }} src={'/image/' + item.Logo + '.png'} />
                                <div className="overview-detail">
                                  <div className="project-card-title">{item.ProJect}</div>
                                  {/* <div className="project-card-subtitle">
                                    {item.Description}
                                  </div> */}
                                </div>

                              </div>
                              <div className="project-overview-buttons">
                                {/* category */}
                                <button className="search-buttons detail-button">{item.Category}</button>
                                {/* subcategory */}
                                {
                                  eval(item.SubCategorles).map(item => <button className="search-buttons detail-button">{item}</button>)
                                }
                                <div className="project-stat">
                                  <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--subtitle-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                                    <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                                  <div>12</div>
                                </div>

                              </div>
                            </div>
                          </div>)
                      }
                    </div>

                    <div className="project-explain">
                      <ProHead data={currentProject} />
                     
                      <ClipPathHover data={currentProject.Invs} />
                      {/* <div style={{marginTop:'30px'}} className="roadmap-title">Media</div>
                      <div className={styles.media}>
                        <MediaItem  href={currentProject.Website}/>
                      </div> */}
                    </div>
                  </div>
                }


              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default connect(({ global }) => ({
  global
}))(Page)