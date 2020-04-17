import React from 'react';
import '../style/App.css';

export default class ProjectItems extends React.Component
{
    render () {
        return (
          <>
            <div className={this.props.left}> 
                <figure className="image is-256x256">
                  {
                    this.props.items.video ?
                      <div className="outer-div">
                        <video width="90%" height="auto" loop autoPlay={true} muted={true} src={require(`../videos/${this.props.items.video}.mp4`)} />
                      </div>
                    : null
                  }
                  <img className={ this.props.items.video ? "image-frame" : "" } src={require(`../images/${this.props.items.image}`)} alt="react-app"/>
                </figure>
            </div>
            <div className={this.props.right}>
              <h1 className="title has-text-left extra-space">
                <a target="_blank" rel="noopener noreferrer" className="is-text has-text-black" href={this.props.items.link}>{this.props.items.heading}</a>
              </h1>
              <p className="bd-notification is-primary has-text-left is-size-5">{this.props.items.mainDesc}</p>
              <p className="bd-notification is-primary has-text-left is-size-5">{this.props.items.secondDesc}</p>
              <div className="columns is-gap extra-space">
                {
                    this.props.items.technologies.map((data,index) => {
                        return <>
                          <div className="techno">
                            <figure className="image is-32x32">
                              <a target="_blank" rel="noopener noreferrer" href={data.link}><img src={require(`../images/${data.icon}`)} alt="technologies"/></a>
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
                          <a target="_blank" rel="noopener noreferrer" className="is-text" href={data.links}>{data.links}</a>
                        </p>
                      </>
                    })
                }
                {
                    this.props.items.documentation.map((data,index) => {
                      return <>
                        <p className="bd-notification is-primary has-text-left doc-link">{data.desc}<br></br>
                          <a target="_blank" rel="noopener noreferrer" className="is-text" href={data.links}>{data.links}</a>
                        </p>
                      </>
                    })
                }
                {
                    this.props.items.playstore.map((data,index) => {
                      return <>
                      <a target="_blank" rel="noopener noreferrer" className="is-text" href={data.links}>
                        <figure className="image is-256x256">
                          <img className="play-store" src={require(`../images/${data.badge}`)} width="40" height="40" alt="playstore" />
                        </figure>
                      </a>
                      </>
                    })
                }
            </div>
          </>
        );
    }
}
