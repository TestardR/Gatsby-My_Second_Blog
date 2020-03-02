// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import ProjectFeed from './ProjectFeed';

describe('ProjectFeed', () => {
  const props = {
    edges: [
      {
        node: {
          fields: {
            slug: '/test_0'
          },
          frontmatter: {
            date: '2016-09-01',
            description: 'test_0',
            title: 'test_0',
            socialImage: '/test_0'
          }
        }
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ProjectFeed {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
