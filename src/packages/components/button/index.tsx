import classnames from 'classnames';
import React from 'react';

import styles from './button.module.scss';

interface IProps {
  primary?: boolean;
  onClick?(): void;
}

export const Button: React.FC<IProps> = ({ primary, onClick, children }) => {
  return (
    <button className={classnames(styles.self, { [styles.primary]: primary })} onClick={onClick}>
      {children}
    </button>
  );
};
