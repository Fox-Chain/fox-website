import styles from './index.less';

interface Props {
  render: JSX.Element | string;
}

const Button: React.FC<Props> = ({ render }) => {
  return <span className={styles.button}>{render}</span>;
};

export const ButtonDebug = () => {
  return (
    <div className={styles.button}>
      <div className="button-effect">
        <h2>Effect #1</h2>
        <a className="effect effect-1 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-1 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-1 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-1 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-1 w-s" href="#" title="Learn More">
          Learn More
        </a>
      </div>

      <div className="button-effect">
        <h2>Effect #2</h2>
        <a className="effect effect-2 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-2 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-2 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-2 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-2 w-s" href="#" title="Learn More">
          Learn More
        </a>
      </div>

      <div className="button-effect">
        <h2>Effect #3</h2>
        <a className="effect effect-3 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-3 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-3 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-3 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-3 w-s" href="#" title="Learn More">
          Learn More
        </a>
      </div>

      <div className="button-effect">
        <h2>Effect #4</h2>
        <a className="effect effect-4 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-4 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-4 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-4 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-4 w-s" href="#" title="Learn More">
          Learn More
        </a>
      </div>

      <div className="button-effect">
        <h2>Effect #5</h2>
        <a className="effect effect-5 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-5 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-5 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-5 w-s" href="#" title="Learn More">
          Learn More
        </a>
        <a className="effect effect-5 w-s" href="#" title="Learn More">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Button;
