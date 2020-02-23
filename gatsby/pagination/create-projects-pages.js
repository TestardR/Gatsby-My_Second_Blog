'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" } } }
      ) { totalCount }
    }
  `);
  
  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/projects' : `/projects/${i}`,
      component: path.resolve('./src/templates/project-list-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/projects' : `/projects/${i - 1}`,
        nextPagePath: `/projects/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
