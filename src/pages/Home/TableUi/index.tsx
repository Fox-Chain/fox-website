import { useEffect, useMemo } from 'react';
import styles from './index.less';

const Second = () => {
  return (
    <div className={styles.second}>
      <table className="container12">
        <thead>
          <tr>
            <th>
              <h1></h1>
            </th>
            <th>
              <h1>EUR</h1>
            </th>
            <th>
              <h1>USD</h1>
            </th>
            <th>
              <h1>JPY</h1>
            </th>
            <th>
              <h1>GBP</h1>
            </th>
            <th>
              <h1>CNY</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EUR</td>
            <td>9518</td>
            <td>9518</td>
            <td>9518</td>
            <td>6369</td>
            <td>6369</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>9518</td>
            <td>9518</td>
            <td>9518</td>
            <td>6369</td>
            <td>6369</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>9518</td>
            <td>9518</td>
            <td>9518</td>
            <td>6369</td>
            <td>6369</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>9518</td>
            <td>9518</td>
            <td>9518</td>
            <td>6369</td>
            <td>6369</td>
          </tr>
          <tr>
            <td>CNY</td>
            <td>9518</td>
            <td>9518</td>
            <td>9518</td>
            <td>6369</td>
            <td>6369</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Second;
