import React from 'react';
import SocialIcons from './SocialIcons';

export default class TeamMembers extends React.Component
{
    render () {
        return (
          <>
            {
              <div className="column is-4 is-pulled-left">
                <div className="card">
                  <header className="card-header">
                    <figure className="image is-256x256">
                      <img src={require(`../images/${this.props.members.image}`)} alt="developer" />
                    </figure>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <h2 className="title is-4">{this.props.members.title}</h2>
                      {this.props.members.bio}
                    </div>
                  </div>
                  <footer className="card-footer">
                    {
                      this.props.members.socialIcons.map((data,index) => {
                        return <>
                          <SocialIcons
                            icons={data}
                          />
                        </>
                      })
                    }
                  </footer>
                </div>
              </div>
            }
          </>
        );
    }
}
