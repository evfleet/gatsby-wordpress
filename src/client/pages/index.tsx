import * as React from "react";
import { graphql } from "gatsby";

export const indexPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;

const IndexPage = ({ data: { site, allWordpressPost } }) => {
  return (
    <div>
      <h1>{site.siteMetadata.title}</h1>
      {allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <p>{node.slug}</p>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
