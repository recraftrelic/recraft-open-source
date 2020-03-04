import React from 'react';

export default class ProjectItems extends React.Component
{
    render () {
        return (
          <>
            <div className={this.props.left}>
              <figure className="image is-256x256">
                <img src={require(`../images/${this.props.items.image}`)} alt="chat-app" />
              </figure>
            </div>
            <div className={this.props.right}>
              <h1 className="title has-text-left extra-space">
                <a className="is-text has-text-black" href={this.props.items.link}>{this.props.items.heading}</a>
              </h1>
              <p className="bd-notification is-primary has-text-left is-size-5">{this.props.items.mainDesc}</p>
              <p className="bd-notification is-primary has-text-left is-size-5">{this.props.items.secondDesc}</p>
              <div className="columns is-gap extra-space">
                {
                    this.props.items.technologies.map((data,index) => {
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
                    this.props.items.contribution.map((data,index) => {
                      return <>
                        <p className="bd-notification is-primary has-text-left">{data.desc}<br></br>
                          <a className="is-text" href={data.links}>{data.links}</a>
                        </p>
                      </>
                    })
                }
            </div>
          </>
        );
    }
}