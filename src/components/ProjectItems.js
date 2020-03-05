import React from 'react';
import '../style/App.css';

export default class ProjectItems extends React.Component
{
    render () {
        return (
          <>
            <div className={this.props.left}>
              <figure className="image is-256x256">
                <a target="_blank" href={this.props.items.link}><img src={require(`../images/${this.props.items.image}`)} alt="chat-app" /></a>
              </figure>
            </div>
            <div className={this.props.right}>
              <h1 className="title has-text-left extra-space">
                <a target="_blank" className="is-text has-text-black" href={this.props.items.link}>{this.props.items.heading}</a>
              </h1>
              <p className="bd-notification is-primary has-text-left is-size-5">{this.props.items.mainDesc}</p>
              <p className="bd-notification is-primary has-text-left is-size-5">{this.props.items.secondDesc}</p>
              <div className="columns is-gap extra-space">
                {
                    this.props.items.technologies.map((data,index) => {
                        return <>
                          <div className="techno">
                            <figure className="image is-32x32">
                              <a target="_blank" href={data.link}><img src={require(`../images/${data.icon}`)} alt="technologies"/></a>
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
                          <a target="_blank" className="is-text" href={data.links}>{data.links}</a>
                        </p>
                      </>
                    })
                }
            </div>
          </>
        );
    }
}
