import * as React from "react";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default IndexPage;
