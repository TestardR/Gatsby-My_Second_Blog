// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import ProjectFeed from '../components/ProjectFeed';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark
};

const ProjectsListTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  const pageTitle = `Projects - ${siteTitle}`;
  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page title={'Projects & Startups'}>
        <div style={{marginBottom: "2rem", }}>
          Here are some applications I have made or contributed to. These were once cool to me.
          Enough so I put them here. Truth be told, they may or may not still be cool to me.
        </div>
        <ProjectFeed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ProjectListsTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: { template: { eq: "project" }, draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            socialImage
          }
        }
      }
    }
  }
`;

export default ProjectsListTemplate;
