import classnames from "classnames";
import React from "react";

import styles from "./counter.module.scss";

interface IProps {
  configured?: boolean;
  onClick?(): void;
}

export const Counter: React.FC<IProps> = ({
  configured,
  children,
  onClick
}) => {
  return (
    <div className={classnames(styles.self)}>
      <p>Configure</p>
      <div
        className={classnames(styles.number, {
          [styles.configured]: configured
        })}
      >
        {" "}
        {children}
      </div>
    </div>
  );
};
