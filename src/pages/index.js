import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import {graphql, Link} from 'gatsby'

export default function Home(/* {data} */) {

 /*  console.log(data, "data"); */
 /*  const {title, description} = data.site.siteMetadata */
  return (
    <Layout>
<section className= "header">
       <div>
         <h2 > Design</h2>
         <h3>Develop and Deploy</h3>
         <p>Designer and web developer</p>

         <Link className = "btn" to = "/projects">Portfolio projects</Link>
         
        {/*  <p>{title} -{description}</p> */}
       </div>
    </section>
    </Layout>
    
  )
}
/* export const query = graphql`
query siteData {
  site {
    host
    port
    siteMetadata {
      copyright
      description
      title
    }
  }
}

` */

