import styles from './index.less';
const Page234 = (props) => {
  const { upload1, onHandClick } = props;
  const readUrl = (input) => {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        let imgData = e.target.result;
        let imgName = input.files[0].name;
        input.setAttribute("data-title", imgName);
        console.log(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }

  }
  return (
    <div className={styles.page}>

      <div className="full-card">

        <div className="font-card robotoslab-card">
          <h3 className="font--robotoslab" >We're hiring</h3>
          <div className="explore-button" onClick={() => { onHandClick(true);document.getElementById('ab1')?.focus() }}>Apply</div>
          {/* 上传 */}
          <div id='ab1'  tabindex="1" onBlur={()=>onHandClick(false)} className='uploadP' style={{ transform: upload1 && 'translateY(0%)' || 'translateY(100%)' }}>
            <div className="form-group inputDnD">
              <input onChange={(e) => readUrl(e.target)} type="file" className="form-control-file text-primary font-weight-bold" id="inputFile" accept="image/*" data-title="Drag and drop a file" />
              <div>
                <div className="submit">
                  Upload
                </div>
                <div className="cancel">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-description">
          <h2 className="font--robotoslab">Front-End Engineer</h2>
          <h2>Description</h2>
          <p >As our Front-End Engineer, you will design and develop from scratch the FE of StarkNet, our blockchain scalability platform, which will be used by blockchain development teams to build their dApps.</p>
          <p >You will design the system, take part in making the technological decisions on which it would be based, develop it and take it all the way to successful deployment. </p>
          <h2>Requirements</h2>
          <ul>
            <li>Bachelor's degree in Computer Science or equivalent</li>
            <li>Has at least 3 years of hands-on Front-End/Full-Stack development experience</li>
            <li>Has high coding standards and cares for good, readable, and maintainable code</li>
            <li>Is familiar with leading FE frameworks (React- Advantage)</li>
            <li>Masters the holy trinity of Javascript (preferably ES6), HTML, and CSS</li>
            <li>Has good personal relations and communication skills</li>
            <li>Is curious by nature and a quick learner</li>
          </ul>

        </div>
        {/* <div className="form-group inputDnD">
              <div {...getRootProps({ className: 'dropzone' })}>
                <div className="form-group inputDnD">
                  <label className="sr-only" for="inputFile">File Upload</label>
                  <input {...getInputProps()} type="file" className="form-control-file text-primary font-weight-bold" id="inputFile" accept="image/*"  data-title="Drag and drop a file" style={{display:'block'}}/>
                </div>
                <ul>{files}</ul>
              </div>            
            </div> */}
      </div>


    </div>
  );
};

export default Page234;
