import React from 'react';

export default class TeamManager extends React.Component
{
    render () {
        return (
            <div className="column is-4 is-pulled-left">
              <div className="card">
                <header className="card-header">
                  <figure className="image is-256x256">
                    <img src={this.props.teamImage} alt="developer" />
                  </figure>
                </header>
                <div className="card-content">
                  <div className="content">
                    <h2 className="sub-title">{this.props.teamTitle}</h2>
                      {this.props.teamBio}
                  </div>
                </div>
                <footer className="card-footer">
                  {
                    this.props.socialIcons.map((data,index) => {
                      return <>
                        <a href={data.link} className="card-footer-item">
                          <span className={`icon ${data.color}`}><i className={data.icon}></i></span>
                        </a>
                      </>
                    })
                  }
                </footer>
              </div>
            </div>
        );
    }
}
