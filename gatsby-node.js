const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allWordpress = await graphql(
    `
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              excerpt
              title
            }
          }
        }
      }
    `
  );

  if (allWordpress.errors) {
    console.error(allWordpress.errors);
    throw new Error(allWordpress.errors);
  }

  allWordpress.data.allWordpressPost.edges.forEach(({ node }) => {
    const { id, slug } = node;

    console.log("creating", slug);

    createPage({
      path: slug,
      component: path.resolve(`./src/client/templates/post.tsx`),
      context: {
        id
      }
    });
  });
};
