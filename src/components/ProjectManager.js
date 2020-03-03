import React from 'react';

export default class ProjectManager extends React.Component
{
    render () {
        return (
            <section className={this.props.class ? "section alternate" : "section"}>
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    <div className={this.props.leftSection}>
                      <figure className="image is-256x256">
                        <img src={this.props.projectImage} alt="chat-app" />
                      </figure>
                    </div>
                    <div className={this.props.rightSection}>
                      <h1 className="title has-text-left extra-space">
                        <a className="is-text has-text-black" href={this.props.projectLink}>{this.props.projectHeading}</a>
                      </h1>
                      <p className="bd-notification is-primary has-text-left is-size-5">{this.props.mainDescription}</p>
                      <p className="bd-notification is-primary has-text-left is-size-5">{this.props.secondDescription}</p>
                      <div className="columns is-gap extra-space">
                        {
                          this.props.technologies.map((data,index) => {
                            return <>
                              <div className="column is-1">
                                <figure className="image is-32x32">
                                  <a href={data.link}><img src={require(`../images/${data.icon}`)} alt="technologies"/></a>
                                </figure>
                              </div>
                            </>
                          })
                        }
                      </div>
                      {
                        this.props.contributors.map((data,index) => {
                          return <>
                            <p className="bd-notification is-primary has-text-left">{data.desc}<br></br>
                              <a className="is-text" href={data.links}>{data.links}</a>
                            </p>
                          </>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
