import classnames from 'classnames';
import React from 'react';

import styles from './widgetContainer.module.scss';


interface IProps {
  onClick?(): void;
  error?:boolean;
  warning?: boolean;
}

export const WidgetContainer: React.FC<IProps> = ({ error, children, warning }) => {
  return (
    <div className={classnames(styles.self, { [styles.error]:error, [styles.warning]:warning })}>
    </div>
  );
};
