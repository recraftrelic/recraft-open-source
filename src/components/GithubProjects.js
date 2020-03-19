import React from 'react';
import { getGithubData } from '../api/github';
import GithubCommitsItem from './GithubCommitsItem';

export default class GithubProjects extends React.Component {

  state = {
    repo: "",
    repoLink: "",
    commitList: []
  }

  componentDidMount() {
    const repoUrl = `recraftrelic/react-native-chat-app-boilerplate`;
    const commitsUrl = `${repoUrl}/commits`;

    getGithubData(repoUrl)
    .then(result => {
      if (result.data) {
        this.setState({
          repo: result.data.name,
          repoLink: result.data.html_url,
        })
      }
    })
    .catch(error =>
      console.log(error)
    );

    getGithubData(commitsUrl)
      .then(result => {
        if (result.data) {
          this.setState({
            commitList: result.data
          })
        }
      })
      .catch(error =>
        console.log(error)
      );
  }

  render() {
    let { repo, repoLink, commitList } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-8">
              <div className={"column is-12 is-pulled-left has-text-left"}>
                <h1 className="title has-text-left extra-space">
                  <a target="_blank" className="is-text has-text-black" href={"/"}>{"Github Works"}</a>
                </h1>
                {commitList.length && commitList.map((commit, index) => {
                  if(index < 10){
                    return (
                      <div key={index}>
                        <GithubCommitsItem
                          repo={repo}
                          repoLink={repoLink}
                          name={commit.commit.author.name}
                          avatar={commit.author.avatar_url}
                          commitId={commit.sha}
                          commitLink={commit.html_url}
                          commitUserProfile={commit.author.html_url}
                        />
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
