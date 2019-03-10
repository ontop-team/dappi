import classnames from 'classnames';
import React from 'react';
import hug from '../../../images/3dHug.png'; 



import styles from './modal.module.scss';
import { Button } from '@dappi/components/button';

interface IProps {
  onClick?(): void;
  appear?:boolean;
  headline: string;
  buttonText: string;
  secondaryLink: string;
}

export const Modal: React.FC<IProps> = ({ appear, children, headline, buttonText, secondaryLink}) => {
  return (
    <div className={classnames(styles.self, { [styles.appear]:appear })}>
      <div className={classnames(styles.imgContainer)}>
        <img style={{width:'67px'}} src={hug} />
      </div>
      <h3 headline={headline}>{headline}</h3>
      <p>{children}</p>
      <Button buttonText={buttonText}>{buttonText}</Button>
      <a secondaryLink={secondaryLink} href="">{secondaryLink}</a>
    </div>
  );
};
