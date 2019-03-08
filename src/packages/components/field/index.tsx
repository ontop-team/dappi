import classnames from "classnames";
import React from "react";

import styles from "./field.module.scss";

interface IProps {
  activeText?: boolean;
  active?: boolean;
  onClick?(): void;
}

export const Field: React.FC<IProps> = ({ activeText, children, active }) => {
  return (
    <div className={classnames(styles.self)}>
      <div className={classnames(styles.icon, { [styles.active]: active })} />
      <div
        className={classnames(styles.text, { [styles.activeText]: activeText })}
      >
        {children}
      </div>
    </div>
  );
};
