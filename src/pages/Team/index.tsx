import { useEffect, useLayoutEffect, useState } from 'react';
import { ReactComponent as Location } from '@/assets/location_on.svg';
import { ReactComponent as Nationality } from '@/assets/flag_circle.svg';
import { ReactComponent as University } from '@/assets/location_city.svg';
import { ReactComponent as Major } from '@/assets/history_edu.svg';
import { ReactComponent as Degree } from '@/assets/school.svg';
import { ReactComponent as TechStack } from '@/assets/dvr.svg';
import Jobs from './Jobs2';
import { connect } from 'umi';
import styles from './index.less';
const colors = [
  '#FFC000',
  '#DE600F',
  '#E99214',
  '#F1C01D',
  '#F4E829',
  '#C6D11F',
  '#89B929',
  '#2BA23A',
  '#169243',
  '#119468',
  '#12968F',
  '#1797B5',
  '#1E95D4',
  '#127DC2',
  '#0D63A9',
  '#024391',
  '#1D2A73',
  '#58207C',
  '#88167A',
  '#B00F77',
  '#D21577',
  '#D41664',
  '#D5154C',
  '#D61533'
]
const Page = (props) => {
  const [teamList, setTeamList] = useState([])
  const [f, setF] = useState(false)
  useEffect(() => {
    getTeam();
  },[]);
  useEffect(() => {

    var bgColor;
    var effect = 'animated bounceInLeft'; /* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
										 bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
										 rotateInUpRight, rotateInDownRight  */
    $('.all-content').hide();

    $('.content li').click(function () {
      $('.card-front, .card-back').hide();
      $('.content li').removeClass('activeT').hide().css('border', 'none');
      $(this).addClass('activeT').show();
      bgColor = $('.activeT .card-back').css('background-color');
      $('.content').css('background-color', bgColor);
      $('.close, .all-content').show();
      $('.responsive').append('<span class="close">close</span>').addClass(effect);
    });


    $('.responsive').on('click', '.close', function () {

      $('.close').remove();
      bgColor = $('.activeT .card-front').css('background-color');
      $('.responsive').removeClass(effect);
      $('.all-content').hide();
      $('.content li').removeClass('activeT').show().css({
        'border-bottom': '1px solid #2c2c2c',
        'border-left': '1px solid #2c2c2c'
      });
      $('.card-front, .card-back').show();
      $('.content').css('background-color', bgColor);
    });
  }, [f])

  const getTeam = () => {
    const { dispatch } = props;
    dispatch({
      type: 'global/getTeam',
      payload: {
        current: 1,
        pageSize: 100
      },
      callback: response => {
        if (response.code == 0)
          setTeamList(response.data);
        setF(true)
      }
    });
  };
  return (
    <div className={styles.page}>
      {/* <Jobs /> */}
      <div className="responsive">
        <ul className="content">
          {
            teamList.map((item, index) => <li>
              <div className="card-front">
                <h2><b>{item.Name}</b></h2>
                <p>{item.Title}</p>
              </div>
              <div className="card-back" style={{ background: index < colors.length && colors[index] || colors[0] }}>
                <h2><b>Click here</b></h2>
              </div>

              <div className="all-content">
                <div className='moreinfo'>
                  <div className='moreinfo_left'>
                    <h1>{item.Name}</h1>
                    <h1 style={{ fontSize: '30px', fontWeight: 'unset' }}>{item.Title}</h1>
                  </div>
                  <div className='moreinfo_right'>
                    <div>
                      <div className='il'>
                        <div className="icon">
                          <Location />
                          Location
                        </div>
                      </div>
                      <div className='il'>
                        {item.Location}
                      </div>
                    </div>
                    <div>
                      <div className='il'>
                        <div className="icon">
                          <Nationality />
                          Nationality
                        </div>
                      </div>
                      <div className='il'>
                        {item.Nationality}
                      </div>
                    </div>
                    <div>
                      <div className='il'>
                        <div className="icon">
                          <University />
                          University
                        </div>
                      </div>
                      <div className='il'>
                        {item.University}
                      </div>
                    </div>
                    <div>
                      <div className='il'>
                        <div className="icon">
                          <Major />
                          Major
                        </div>
                      </div>
                      <div className='il'>
                        {item.Major}
                      </div>
                    </div>
                    <div>
                      <div className='il'>
                        <div className="icon">
                          <Degree />
                          Degree
                        </div>
                      </div>
                      <div className='il'>
                        {item.Degree}
                      </div>
                    </div>
                    <div>
                      <div className='il'>
                        <div className="icon">
                          <TechStack />
                          TechStack
                        </div>
                      </div>
                      <div className='il'>
                        {item.TechStack}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>)
          }



        </ul>
      </div>
    </div>
  );
};

export default connect(({ global }) => ({
  global
}))(Page)
