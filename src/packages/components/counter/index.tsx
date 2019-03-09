import classnames from 'classnames';
import React, { useState } from 'react';

import styles from './counter.module.scss';

interface IProps {
  configured?: boolean;
  onClick?(): void;
}

export const Counter: React.FC<IProps> = ({ configured, children, onClick }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleIsOpened = () => setIsOpened(!isOpened);

  return (
    <div className={classnames(styles.self)} onClick={toggleIsOpened}>
      <p>Configure</p>
      <div
        className={classnames(styles.number, {
          [styles.configured]: configured,
        })}
      >
        {' '}
        {children}
      </div>
      {isOpened && <div className={styles.list}>OPENED</div>}
    </div>
  );
};
