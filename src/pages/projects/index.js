import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import "../../styles/portfolio.css"
import Img from 'gatsby-image'

export default function index({data}) {
    console.log(data);

    const projects = data?.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
          <div className = "portfolio">
            <h1>Now you are in project folder
            </h1>
            <h3>Websites and projects</h3>

          <div className = "projects">
              {projects.map(project=>(
                  <Link to = {"/projects/" + project.frontmatter.slug} key = {project.id}>
                      <div > 
                          <Img fluid = {project.frontmatter.thumb?.childImageSharp.fluid}/>
                          <h3>{project.frontmatter.title}</h3>
                          <p>{project.frontmatter.stack}</p>
                      </div>
                      </Link>
              ))}
          </div>
            <p>Contact me at {contact}</p>
        </div>
        </Layout>
       
    )
}

export const query = graphql`
query MyQuery {
    projects: allMarkdownRemark(sort: {fields: id, order: ASC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }`
