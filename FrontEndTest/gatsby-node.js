const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPages } = actions
    const result = await graphql(`
        {
            allPosts {
                nodes {
                    url
                }
            }
        }
    `);
    return Promise.all(
        result.data.allPosts.nodes.map( async node => {
            await createPage({
                path: node.url,
                component: path.resolve("./src/pages/post.js"),
                context: { url: node.url }
            })
        })
    )
}
