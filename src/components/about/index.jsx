import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "470.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer</SubTitle>
            </div> 
            <div>
              <Title> The Souls of Black Folk </Title>
              <Text> The Souls of Black Folk (1903) details the conditions of <b className="text-primary lined-link">African Americans</b> in the years after the end of slavery. </Text>
              <Text> By examining issues such as education, economic opportunities, and the interaction between Black and White Americans, Du Bois highlights the challenging legacy of slavery and the disempowering effects of the racism and segregation that followed. </Text>
              {/* <Text> behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. </Text> */}
              <ResumeButton href="resume.pdf" target="_blank"> Download Book </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
