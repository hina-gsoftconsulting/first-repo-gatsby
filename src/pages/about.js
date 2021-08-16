import { graphql } from 'gatsby'
import React from 'react'
import dog from "../components/images/dog.jpg"
import Layout from "../components/Layout"
import Img from 'gatsby-image'

export default function about({data}) {
    console.log(data)
    return (
        <Layout>
        <div>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et aliquam ex. Fusce ut lectus erat.</p>
          <h3>Local Image</h3>
           <img src={dog} alt = "Local image" style = {{width: "300px"}} />
           <h3>Static Image</h3>
          <Img fluid = {data.file.childImageSharp.fluid}/>
        </div>
        </Layout>


    )
}

export const query = graphql `
query Banner {
    file(relativePath: {eq: "tulip.jpg"}) {
      relativePath
      childImageSharp {
        fluid {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
  


`
