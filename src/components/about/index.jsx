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

      bookPDF: file(relativeDirectory: {eq: "format"}, extension: {eq: "pdf"}) {
        name
        publicURL
      }

      bookEPUB: file(relativeDirectory: {eq: "format"}, extension: {eq: "epub"}) {
        name
        publicURL
      }
    }
  `)

  const bookPDF = data.bookPDF;
  const bookEPUB = data.bookEPUB;
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
                <ResumeButton href={bookPDF.publicURL} target="_blank"> Download PDF </ResumeButton>
                <ResumeButton href={bookEPUB.publicURL} target="_blank"> Download EPUB </ResumeButton>
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
