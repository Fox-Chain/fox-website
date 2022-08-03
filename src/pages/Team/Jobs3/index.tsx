import { useLayoutEffect, useState, useRef } from 'react';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import { Drawer } from 'antd';
import styles from './index.less';
import { connect } from 'umi';

const Banner = (props) => {
  const [jobIndex, setJobindex] = useState(0)
  const [upload1, setUpload1] = useState(false);
  const couterRef = useRef();
  const JobData = [{
    job: 'Senior Engineer',
    desc: `5+ years of development experience in a high-level object-oriented language (preference for Rust);
    University graduate in Computer Science with a high GPA;
    Experience in building complex, high-scale, high-performance software;
    Good oral and written English, and technical leadership;`,
    ref:useRef()
  },
  {
    job: 'Engineer',
    desc: `2+ years of experience with consensus algorithms;
    Fluency in Rust, C++, Golang, or similar languages. We are working primarily with Rust, but prior experience with this language is not mandatory;
    Deep understanding of software engineering best-practices;
    Good oral and written English;`,
    ref:useRef()
  },
  {
    job: 'Marketing Specialist',
    desc: `5+ years of experience in Marketing or related field with an emphasis on product marketing;
    Experience marketing to developer audiences;
    Strong interpersonal skills and communication capabilities with the ability to work across both highly technical and highly creative teams;
    Deep experience and success in managing cross-functional teams to bring products and features to market;`,
    ref:useRef()
  }]
  return (<div className={styles.banner}>
    <div style={{height:'358px',overflow:'hidden'}}>
      <div style={{transition:'all 0.5s',transform:`translateY(-${jobIndex*357}px)`}}>
        {
          JobData.map((item, index) => <div style={{margin:'50px auto'}}>
            <div className="Notice Field-note is-visible" data-js="field-note">
              <span className="Notice-arrow"></span>
              <span className="Notice-msg"><span style={{ color: '#ffffff' }}>We're hiring {JobData[jobIndex].job}</span></span>
            </div>
            <div className="info">
              <p>Requirements:</p>
              <p>
                <ul style={{listStyle: 'disc',marginLeft: '14px',    fontSize: '14px',lineHeight: '26px'}}>
                {JobData[jobIndex].desc.split(";").map((item,index2)=>item!=""&&<li>{item+((index2*1+2)==JobData[jobIndex].desc.split(";").length&&"."||";")}</li>)}
                  
                </ul>
                </p>
              <div style={{ textAlign: 'center' }}>
                <div className='explore-button' onClick={() => {
                  setUpload1(true);
                  setTimeout(() => {
                    item.ref.current.focus()

                  }, 200);
                }}>Apply</div>
              </div>
              <div onBlur={() => setUpload1(false)} ref={item.ref} tabIndex={index} className='uploadP' style={{ transform: upload1 && 'translateY(0%)' || 'translateY(100%)' }}>
              {/* <div  className='uploadP' style={{ transform: upload1 && 'translateY(0%)' || 'translateY(100%)' }}> */}
                <div style={{ height: '100%', width: '100%' }}>
                  <div className="form-group inputDnD">
                    <input type="file" className="form-control-file text-primary font-weight-bold" id="inputFile" accept="image/*" data-title="Drag and drop your resume " />
                    <div className="explore-button" style={{ marginBottom: '20px' }}>
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
    <div className='tabs'>
      {
        JobData.map((item, index) => <div onClick={() => setJobindex(index)} className='tabitemwrap'><div className='tabitem'><span>{item.job}</span></div></div>)
      }
    </div>
  </div>
  );
};

export default connect(({ global }) => ({
  global
}))(Banner)

