const axios = require('axios');
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions
    const fetch = () => axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')

    const result = await fetch();

    result.data.Brastlewark.map((char, i) => {
            const Char = {
                id: `${i}`,
                parent: `__SOURCE__`,
                internal: {
                    type: `RandomChar`,
                },
                children: [],
                name: char.name,
                image: char.thumbnail,
                width: char.width,
                height: char.height
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
