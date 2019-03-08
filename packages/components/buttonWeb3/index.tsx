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
  icon,
  children,
}) => {
  return (
    <buttonWeb3
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
    </buttonWeb3>
  );
};
