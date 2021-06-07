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
        {/* https://icon-icons.com/ */}
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/golang.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/python.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/typescript.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/docker.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/k8s.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/kafka.png')}
          />
          <img
            className={styles['logo__item']}
            src={require('../../../static/media/technology/postgres.png')}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
