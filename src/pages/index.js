import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Image
} from 'semantic-ui-react'
import backgroundImage from "../../assets/paris-background.jpg"

const IndexPage = () => (
  <Container>
    <Image src={backgroundImage} />
  </Container>
  /*<div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>*/
)

export default IndexPage
