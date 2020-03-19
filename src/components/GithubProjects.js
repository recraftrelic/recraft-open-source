import React from 'react';
import axios from "axios";

export default class GithubProjects extends React.Component {

  state = {
    repo: "",
    contributor: {
      avatar: "",
      name: "",
      commitLink: ""
    }
  }

  componentDidMount() {
      axios.get(`https://api.github.com/repos/recraftrelic/react-native-chat-app-boilerplate`)
      .then(result => {
        if(result.data){
          this.setState({
            repo: result.data.name
          })
        }
      })  
      .catch(error =>
        console.log(error)
      );

      axios.get(`https://api.github.com/repos/recraftrelic/react-native-chat-app-boilerplate/commits`)
      .then(result => {
        let data = result.data[0]
        if(data){
          
          this.setState({
            contributor: {
              avatar: data.author.avatar_url,
              name: data.commit.author.name,
              commitLink: data.html_url,
            }
          })
        }
      })
      .catch(error =>
       console.log(error)
      );
  }

    render () {
      let {repo} = this.state
      let {avatar, name, commitLink} = this.state.contributor
        return (
          <section className="section">
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-8">
                  <div className={"column is-8 is-pulled-left"}>
                    <h1 className="title has-text-left extra-space">
                      <a target="_blank" className="is-text has-text-black" href={"/"}>{repo}</a>
                    </h1>
                    <div className="columns is-gap extra-space">
                      <div className="techno">
                        <figure className="image is-64x64">
                          <a target="_blank" href={"/"}>
                            <img src={avatar} alt="technologies" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <p className="bd-notification is-primary has-text-left is-size-5">{name}</p>
                    <p className="bd-notification is-primary has-text-left">{"Commit :- "}<br></br>
                      <a target="_blank" className="is-text" href={commitLink}>{commitLink}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
