// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <div>My favourite technologies:</div>
        <div className={styles['logo']}>
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/Javascript.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/Typescript.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/Python.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/React.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/Node.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/docker.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/K8S.png')}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
