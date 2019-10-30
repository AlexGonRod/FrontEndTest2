// gatsby-node.js
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;

    const characters = () => axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    const result =  await characters();

    result.data.Brastlewark.map( (char, i) => {
        const userNode = {
            id: `${i}`,
            parent: '__SOURCE__',
            internal: {
                type: 'RandomCharacter',
            },
            children: [],
            name: char.name,
            thumbnail: char.thumbnail,
            professions: char.professions.map(prof => prof)
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(userNode))
            .digest(`hex`);
        // add it to userNode
        userNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(userNode);
    });

    return;
}
