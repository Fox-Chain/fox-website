import { useLayoutEffect, useRef } from 'react';
import Media from 'react-media';
import styles from './index.less';

const Page = (props) => {
  const { title, desc, btn } = props;

  return (
    <div className={styles.page}>
      <section className="showcase">
        <header>
          <h2 className="logo"></h2>
          {/* <div className="toggle"></div> */}
        </header>
        <Media
          queries={{
            big: '(min-width: 800px)',
          }}
        >
          {(matches) =>
            (matches.big && (
              <>
                <div className="text">
                  {/* <h2>{title} </h2> */}

                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button
                    onClick={props.onClick}
                    className="btn btn-4 hover-border-7"
                  >
                    <span>View the code</span>
                  </button>
                </div>
                {props.children}
              </>
            )) || (
              <>
                {props.children}
                <div className="text">
                  {/* <h2>{title} </h2> */}

                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button
                    onClick={props.onClick}
                    className="btn btn-4 hover-border-7"
                  >
                    <span>View the code</span>
                  </button>
                </div>
              </>
            )
          }
        </Media>
      </section>
    </div>
  );
};

export default Page;
