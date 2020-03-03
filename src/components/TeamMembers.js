import React from 'react';

export default class TeamMembers extends React.Component
{
    render () {
        return (
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    {
                      this.props.members.map((data,index) => {
                        return <>
                          <div className="column is-4 is-pulled-left">
                            <div className="card">
                              <header className="card-header">
                                <figure className="image is-256x256">
                                  <img src={require(`../images/${data.image}`)} alt="developer" />
                                </figure>
                              </header>
                              <div className="card-content">
                                <div className="content">
                                  <h2 className="title is-4">{data.title}</h2>
                                    {data.bio}
                                </div>
                              </div>
                              <footer className="card-footer">
                                {
                                  data.socialIcons.map((data,index) => {
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
                        </>
                      })
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
