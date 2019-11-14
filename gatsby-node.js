const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions, store, cache, createNodeId }) => {
    const { createNode, createNodeField } = actions
    const fetch = () => axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')

    const result = await fetch();

    result.data.Brastlewark.map( async char => {
            const Char = {
                internal: {
                    type: `RandomChar`,
                },
                parent: `__SOURCE__`,
                id: `${char.id}`,
                children: [],
                name: char.name,
                image: char.thumbnail,
                weight: char.weight,
                height: char.height,
                age: char.age,
                hair: char.hair_color,
                professions: char.professions,
                friends: char.friends
            }

            const contentDigest = crypto
                .createHash(`md5`)
                .update(JSON.stringify(Char))
                .digest(`hex`);

            Char.internal.contentDigest = contentDigest;
            createNode(Char);
        });

        return;
}
