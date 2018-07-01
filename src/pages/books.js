import React from 'react'
import Helmet from 'react-helmet'
import '../layouts/index.css'
import '../styles/layout-override.css';

const Library = () => (
    <div>
        <Helmet
            title="Blog"
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
            ]}
        />
    </div>
);

export default Library

export const query = graphql`
  query libraryQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
