const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'dow9xz1g',
  dataset: 'production',
  apiVersion: '2021-10-18',
  useCdn: false
})

module.exports = client