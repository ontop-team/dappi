import classnames from 'classnames';
import React from 'react';
import hug from '../../../images/3dHug.png'; 

import styles from './modal.module.scss';
import { Button } from '@dappi/components/button';

interface IProps {
  appear?:boolean;
  headline?: string;
  buttonText?: string;
  secondaryLink?: string;
  onClick?(): void;
}

export const Modal: React.FC<IProps> = ({ appear, children, headline, buttonText, secondaryLink}) => {
  return (
    <div className={classnames(styles.self, { [styles.appear]:appear })}>
      <div className={classnames(styles.imgContainer)}>
        <img style={{width:'67px'}} src={hug} />
      </div>
      <h3>{headline}</h3>
      <p>{children}</p>
      <Button>{buttonText}</Button>
      <a href="">{secondaryLink}</a>
    </div>
  );
};
