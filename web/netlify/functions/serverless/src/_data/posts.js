const client = require('../sanity')

const query = `//groq
  *[_type == "post" && publishedAt < now()]{
    title,
    publishedAt,
    "slug": slug.current,
    "body": pt::text(body)
  }
`

async function getPosts() {
  const posts = await client.fetch(query)
  return posts.map(post => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleDateString(),
  }))
}

module.exports = getPosts