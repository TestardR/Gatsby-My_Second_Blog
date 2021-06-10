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
          <img src={require('../../../static/media/technology/golang.png')} />
          <img src={require('../../../static/media/technology/_python.png')} />
          <img src={require('../../../static/media/technology/_typescript.png')} />
          <img src={require('../../../static/media/technology/docker.png')} />
          <img src={require('../../../static/media/technology/k8s.png')} />
          <img src={require('../../../static/media/technology/kafka.png')} />
          <img src={require('../../../static/media/technology/_postgres.png')} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
