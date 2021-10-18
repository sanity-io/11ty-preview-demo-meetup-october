const blocksToHtml = require('@sanity/block-content-to-html')
const client = require('../sanity')

const isServerless = process.env.ELEVENTY_SERVERLESS || false
const buildConstraint =
  !isServerless
    ? `&& publishedAt < now() && !(_id in path("drafts.**"))`
    : `&& (_id in path("drafts.**"))`

const query = `//groq
  *[_type == "post" ${buildConstraint}]{
    _id,
    title,
    publishedAt,
    body,
    "slug": slug.current,
  }
`

async function getPosts() {
  console.log('isServerless', isServerless)

  const posts = await client.withConfig({
    token: isServerless && process.env.SANITY_READ_TOKEN
  }).fetch(query)

  return posts
    .map(post => ({
      ...post,
      body: blocksToHtml({
        blocks: post.body,
        imageOptions: { w: 320, h: 240, fit: 'max' },
        ...client.config()
      }),
      publishedAt: new Date(post.publishedAt).toLocaleDateString(),
    }))
}

module.exports = getPosts