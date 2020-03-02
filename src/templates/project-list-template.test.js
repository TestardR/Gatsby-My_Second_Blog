// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import ProjectListTemplate from './project-list-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';
import type { RenderCallback } from '../types';

describe('ProjectListTemplate', () => {
  const props = {
    data: {
      ...allMarkdownRemark
    }
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ProjectListTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
