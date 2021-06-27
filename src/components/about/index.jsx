import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: {eq: "640.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(daily)/"}}){
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              title
              author
              synopsis
              time
            }                
          }
        }
      }
    }
  `)

  const bookMD = data.allMarkdownRemark.edges;  
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
        {
          bookMD.map(({ node }) => {
            return(
              <AboutSection key={node.fields.slug}>
              <div>
                <Avatar fluid={data.coverImage.childImageSharp.fluid} alt="book cover image" />
                <SubTitle> {node.frontmatter.author}</SubTitle>
              </div> 
              <div>
                <Title> {node.frontmatter.title} </Title>
                {/* <SubTitle> {node.frontmatter.time}-minute read</SubTitle> */}
                {/* <Text> under <b className="text-primary lined-link">line</b> text randomize </Text> */}
                <Text> {node.frontmatter.synopsis} </Text>
                {/* <Text> {node.frontmatter.about} </Text> */}
                {/* <Text> {node.frontmatter.aboutAuthor} </Text> */}
                
                <ResumeButton href="en/daily/book.pdf" target="_blank"> Download Book </ResumeButton>
              </div>
            </AboutSection>
            )            
          })
        } 
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
