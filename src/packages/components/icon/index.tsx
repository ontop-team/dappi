import classnames from 'classnames';
import React from 'react';

import styles from './icon.module.scss';

interface IProps {
  alert?: boolean;
  importantAlert?: boolean;
  loading?: boolean;
  send?: boolean;
  success?: boolean;
  onClick?(): void;
}

export const Icon: React.FC<IProps> = ({ alert, importantAlert, loading, send, onClick, success }) => {
  return (
    <div
      className={classnames(styles.self, {
        [styles.alert]: alert,
        [styles.importantAlert]: importantAlert,
        [styles.loading]: loading,
        [styles.success]: success,
        [styles.send]: send
      })}
      onClick={onClick}
    ></div>
  );
};