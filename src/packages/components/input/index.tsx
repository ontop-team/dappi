import classnames from "classnames";
import React from "react";

import styles from "./input.module.scss";

interface IProps {
  primary?: boolean;
  error?: boolean;
  warning?: boolean;
  onClick?(): void;
}

export const Input: React.FC<IProps> = ({
  primary,
  error,
  warning,
  onClick
}) => {
  return (
    <input
      placeholder={"Any value"}
      className={classnames(styles.self, {
        [styles.primary]: primary,
        [styles.error]: error,
        [styles.warning]: warning
      })}
      onClick={onClick}
    />
  );
};

export const InputWithHelper: React.FC<IProps> = ({
  primary,
  error,
  warning,
  onClick,
  children
}) => {
  return (
    <div className={styles.container}>
      <input
        placeholder={"Any value"}
        className={classnames(styles.self, {
          [styles.primary]: primary,
          [styles.error]: error,
          [styles.warning]: warning
        })}
        onClick={onClick}
      />
      <div className={styles.helper}>{children}</div>
    </div>
  );
};
