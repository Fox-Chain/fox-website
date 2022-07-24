import { useEffect, useLayoutEffect, useState  } from 'react';
import { connect } from 'umi';
import styles from './index.less';

const Page = (props ) => {
  const [teamList, setTeamList] = useState([])
  const [f, setF] = useState(false)
  useEffect(()=>{
    getTeam();
  });
  useEffect(() => {
    
    var bgColor;
    var effect = 'animated bounceInLeft'; /* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
										 bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
										 rotateInUpRight, rotateInDownRight  */
    $('.all-content').hide();

    $('.content li').click(function () {
      $('.card-front, .card-back').hide();
      $('.content li').removeClass('active').hide().css('border', 'none');
      $(this).addClass('active').show();
      bgColor = $('.active .card-back').css('background-color');
      $('.content').css('background-color', bgColor);
      $('.close, .all-content').show();
      $('.responsive').append('<span class="close">close</span>').addClass(effect);
    });


    $('.responsive').on('click', '.close', function () {

      $('.close').remove();
      bgColor = $('.active .card-front').css('background-color');
      $('.responsive').removeClass(effect);
      $('.all-content').hide();
      $('.content li').removeClass('active').show().css({
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
      payload:{
        current:1,
        pageSize:100
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
      <div className="responsive">
        <ul className="content">
          {
            teamList.map(item=>  <li>
              <div className="card-front">
                <h2><b>{item.Name}</b></h2>
                <p>{item.TechStack}</p>
              </div>
              <div className="card-back">
                <h2><b>Click here</b></h2>
              </div>
  
              <div className="all-content">
                <h1>{item.Name}</h1>
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
