import classnames from 'classnames';
import React from 'react';

import styles from './alert.module.scss';

interface IProps {
  success?: boolean;
  error?: boolean;
  criticalError?: boolean;
  onClick?(): void;
}


export const Alert: React.FC<IProps> = ({
  success,
  error,
  criticalError,
  children,
  onClick
}) => {
  return (
    <div>
      <div
        className={classnames(styles.self, styles.withIcon, {
          [styles.success]: success,
          [styles.error]: error,
          [styles.criticalError]: criticalError,
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};
