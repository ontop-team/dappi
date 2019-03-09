import classnames from 'classnames';
import React from 'react';

import styles from './buttonWeb3.module.scss';

interface IProps {
  primary?: boolean;
  disabled?: boolean;
  notdetected?: boolean;
  loading?: boolean;
  confirming?: boolean;
  onchain?: boolean;
  slow?: boolean;
  aborted?: boolean;
  confirmed?: boolean;
  onClick?(): void;
}

export const ButtonWeb3: React.FC<IProps> = ({
  primary,
  disabled,
  notdetected,
  loading,
  confirming,
  onchain,
  slow,
  aborted,
  confirmed,
  onClick,
  children,
}) => {
  return (
    <div
      className={classnames(styles.self, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
        [styles.notdetected]: notdetected,
        [styles.loading]: loading,
        [styles.confirming]: confirming,
        [styles.onchain]: onchain,
        [styles.slow]: slow,
        [styles.aborted]: aborted,
        [styles.confirmed]: confirmed,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};



export const ButtonWeb3WithIcon: React.FC<IProps> = ({
  primary,
  disabled,
  loading,
  notdetected,
  confirming,
  onchain,
  slow,
  aborted,
  confirmed,
  onClick,
  children
}) => {
  return (
    <div>
      <div
        className={classnames(styles.self, styles.withIcon, {
          [styles.primary]: primary,
          [styles.disabled]: disabled,
          [styles.notdetected]: notdetected,
          [styles.loading]: loading,
          [styles.confirming]: confirming,
          [styles.onchain]: onchain,
          [styles.slow]: slow,
          [styles.aborted]: aborted,
          [styles.confirmed]: confirmed,
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};
