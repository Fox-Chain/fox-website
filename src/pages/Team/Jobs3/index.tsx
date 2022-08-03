import { useLayoutEffect, useState,useRef } from 'react';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import { Drawer } from 'antd';
import styles from './index.less';
import { connect } from 'umi';
const JobData = [{
  job: 'Senior Engineer',
  desc: `Has at least 5 years of development experience in a high-level object-oriented  language (preference for Python and C++);
  Is a University graduate in Computer Science (with a high GPA);
  Has experience building complex, high-scale, high-performance software;
  Is curious by nature and a quick learner;`
},
{
  job: 'Engineer',
  desc: `Has at least 1 year of development experience in a high-level object-oriented language (preference for Python and C++);
  Is a University graduate in Computer Science (with a high GPA);
  Is curious by nature and a quick learner;`
},
{
  job: 'Marketing Specialist',
  desc: `An experience in digital and social networks;
  An experience in versatile content writing;
  Technologies orientation;
  Good communication skills (Verbal and written);
  The ability to make things done (mission-oriented);
  High interpersonal abilities;
  Creativity and initiative ;
  Good learnings abilities;
  The ability to work Independently;
  Good Analyzing skills ;
  English Proficiency;`
}]
const Banner = (props) => {
  const [jobIndex, setJobindex] = useState(0)
  const [upload1, setUpload1] = useState(false);
  const couterRef = useRef();

  return (<div className={styles.banner}>
    <div className="Notice Field-note is-visible" data-js="field-note">
      <span className="Notice-arrow"></span>
      <span className="Notice-msg"><span style={{color:'#ffffff'}}>We're hiring {JobData[jobIndex].job}</span></span>
    </div>
    <div className="info">
      <p>Requirements:</p>
      <p>{JobData[jobIndex].desc}</p>
      <div style={{ textAlign: 'center' }}>
        <div className='explore-button' onClick={()=>{
          setUpload1(true);
          setTimeout(() => {
          couterRef.current.focus()
            
          }, 200);
          }}>Apply</div>
      </div>
      <div onBlur={()=>setUpload1(false)} ref={couterRef} tabIndex="1" className='uploadP' style={{ transform: upload1 && 'translateY(0%)' || 'translateY(100%)' }}>
            <div style={{ height: '100%', width: '100%' }}>
              <div className="form-group inputDnD">
                  <input  type="file" className="form-control-file text-primary font-weight-bold" id="inputFile" accept="image/*" data-title="Drag and drop your resume " />
                <div className="explore-button" style={{marginBottom:'20px'}}>
                Submit
                </div>
              </div>
            </div>
          </div>
    </div>
    <div className='tabs'>
      {
        JobData.map(item=><div style={{height:'22px'}}><div className='tabitem'>{item.job}</div></div>)
      }
      
 
    </div>
  </div>
  );
};

export default connect(({ global }) => ({
  global
}))(Banner)

