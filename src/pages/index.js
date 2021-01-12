import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Button from "../components/button"
import Hr from "../components/hr"
import Flex1 from "../components/flex_1"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero_contianer">
      <Image />
    </div>
    <Button />
    <Hr />
    <Flex1 />
  </Layout>
)

export default IndexPage
