import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, titleSuffix }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title + titleSuffix}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title + titleSuffix,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap"
        rel="preload"
        as="style"
      ></link>
      <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
  )
}
SEO.defaultProps = {
  lang: `en`,
  titleSuffix: "Portfolio",
  meta: [],
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  titleSuffix: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
}

export default SEO
