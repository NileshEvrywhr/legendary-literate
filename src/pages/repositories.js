import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Repository from "../components/works/github"
// import { graphql } from "gatsby"
import {RepoGrid, RepoInfo} from "../components/styled/repository"
import {SectionIntro, ContainerLayout} from "../components/common";
import { Link } from "gatsby";

const RepositoryPage = () => { 
  // const {
  //   name,
  //   avatarUrl,
  //   repositories,
  // } = data.githubData.data.viewer

  return (
    <Layout> 
      <SEO title="Library" />
      <ContainerLayout>
        <SectionIntro>
          <RepoInfo>
            {/* <Avatar style={{ backgroundImage: `url(${avatarUrl})` }} /> */}
            {/* <h2>{name}</h2> */}
            <h2>if you have ideas for this space, raise <Link to="https://github.com/NileshEvrywhr/legendary-literate/issues">github issues</Link></h2>            
          </RepoInfo>
          <RepoGrid>
            {/* {repositories.nodes.map((repo, index) => <Repository key={index} repo={repo} />).reverse()} */}            
          </RepoGrid>
        </SectionIntro>
      </ContainerLayout>
    </Layout>
  )
}
export default RepositoryPage

// export const gitHubQuery = graphql`
//   {
//     githubData {
//       data {
//         viewer {
//           name
//           avatarUrl
//           repositories {
//             nodes {
//               name
//               description
//               homepageUrl
//               resourcePath
//               forkCount
//               createdAt
//               updatedAt
//               languages {
//                 edges {
//                   node {
//                     name
//                     color
//                   }
//                 }
//               }
//               licenseInfo {
//                 name
//               }
//               stargazers {
//                 totalCount
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `