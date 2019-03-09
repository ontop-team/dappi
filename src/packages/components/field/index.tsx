import classnames from "classnames";
import React from "react";

import styles from "./field.module.scss";
import { Counter } from "@dappi/components/counter";

interface IProps {
  activeText?: boolean;
  active?: boolean;
  configured?: boolean;
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

export const FieldConfigurable: React.FC<IProps> = ({
  activeText,
  children,
  active
}) => {
  return (
    <div className={classnames(styles.self)}>
      <div className={classnames(styles.icon, { [styles.active]: active })} />
      <div
        className={classnames(styles.text, { [styles.activeText]: activeText })}
      >
        {children}
      </div>
      <Counter>21</Counter>
    </div>
  );
};

export const FieldConfigured: React.FC<IProps> = ({
  activeText,
  children,
  active
}) => {
  return (
    <div className={classnames(styles.self)}>
      <div className={classnames(styles.icon, { [styles.active]: active })} />
      <div
        className={classnames(styles.text, { [styles.activeText]: activeText })}
      >
        {children}
      </div>
      <Counter configured>21</Counter>
    </div>
  );
};
