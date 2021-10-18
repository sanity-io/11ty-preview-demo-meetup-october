import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'

import Iframe from 'sanity-plugin-iframe-pane'

const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:8888' : 'https://11ty-preview-demo.netlify.app/'

const resolveProductionUrl = (doc) => {
  return `${baseUrl}/preview/${doc.slug.current}/`
}

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === `post`) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => resolveProductionUrl(doc),
        })
        .title('Preview')
    ])
  }

  return S.document()
}

export default S.defaults()