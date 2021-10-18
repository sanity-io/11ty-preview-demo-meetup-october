const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'dow9xz1g',
  dataset: 'production',
  apiVersion: '2021-10-18',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN
})

module.exports = client