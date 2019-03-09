import classnames from 'classnames';
import React from 'react';

import styles from './label.module.scss';

interface IProps {
  primary?: boolean;
}

export const Label: React.FC<IProps> = ({ primary, children }) => {
  return (
    <label className={classnames(styles.self, { [styles.primary]: primary })}>{children}</label>
  );
};
