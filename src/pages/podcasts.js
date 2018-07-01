import React from 'react'
import Helmet from 'react-helmet'
import '../layouts/index.css'
import '../styles/layout-override.css';

const Podcasts = () => (
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

export default Podcasts

export const query = graphql`
  query podcastsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
