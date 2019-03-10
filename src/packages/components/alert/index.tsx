import classnames from 'classnames';
import React from 'react';

import styles from './alert.module.scss';

interface IProps {
  success?: boolean;
  info?: boolean;
  alert?: boolean;
  importantAlert?: boolean;
  onClick?(): void;
}


export const Alert: React.FC<IProps> = ({
  success,
  info,
  alert,
  importantAlert,
  children,
  onClick
}) => {
  return (
    <div>
      <div
        className={classnames(styles.self, styles.withIcon, {
          [styles.success]: success,
          [styles.info]: info,
          [styles.alert]: alert,
          [styles.importantAlert]: importantAlert,
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};
