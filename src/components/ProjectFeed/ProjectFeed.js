// @flow strict
import React from 'react';
import moment from 'moment';
import { Link, withPrefix } from 'gatsby';
import type { Edges } from '../../types';
import styles from './ProjectFeed.module.scss';

type Props = {
  edges: Edges
};

const ProjectFeed = ({ edges }: Props) => {
  return (
    <div className={styles['project-feed']}>
      {edges.map(edge => (
        <div
          className={styles['project-feed__item']}
          key={edge.node.fields.slug}
        >
          <div className={styles['project-feed__item-meta']}>
            <h2 className={styles['project-feed__item-title']}>
              <Link
                className={styles['project-feed__item-title-link']}
                to={edge.node.fields.slug}
              >
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <div style={{display: 'flex'}}>
              <time
                className={styles['project-feed__item-meta-time']}
                dateTime={moment(edge.node.frontmatter.date).format(
                  'MMMM D, YYYY'
                )}
              >
                {moment(edge.node.frontmatter.date).format('YYYY')}
              </time>
              <span className={styles['project-feed__item-meta-divider']} />

              <span className={styles['project-feed__item-meta-time']}>{edge.node.frontmatter.time}</span>
            </div>
          </div>
          <div className={styles['project-feed__item-image']}>
            <Link
              className={styles['project-feed__item-image-link']}
              to={edge.node.fields.slug}
            >
              <img
                src={withPrefix(edge.node.frontmatter.socialImage)}
                className={styles['author__photo']}
                width="100%"
                height="100%"
                alt={edge.node.frontmatter.title}
              />
              <div className={styles['project-feed__item-image-overlay']}>
                <div
                  className={styles['project-feed__item-image-overlay-message']}
                >
                  Explore
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectFeed;
