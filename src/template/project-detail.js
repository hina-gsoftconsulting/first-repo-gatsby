import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import "../styles/project-detail.css"
import { graphql } from 'gatsby'

export default function ProjectDetail({data}) {

const {html} = data.markdownRemark
const {title, stack, featuredImg} = data.markdownRemark.frontmatter


    return (
        <Layout>
            <div className = "details">
                <h2>Title :{title}</h2>
                <h3>Stack :{stack}</h3>
                <div className = "featured">
                    <Img fluid = {featuredImg.childImageSharp.fluid}/>
                </div>
                <div className= "html" dangerouslySetInnerHTML={{__html: html}}/>
            </div>

        </Layout>
            
        
    )
}

export const query = graphql`
query projectDetail ($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `

