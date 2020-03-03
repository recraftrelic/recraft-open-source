import React from 'react';

export default class Projects extends React.Component
{
    render () {
        return (
            <>
            {
                this.props.projectList.map((data,index) => {
                  let leftAlign = "column is-4 is-pulled-left"
                  let rightAlign = "column is-8 is-pulled-right"
  
                  if(data.align == "left") {
                    leftAlign = "column is-4 is-pulled-left"
                    rightAlign = "column is-8 is-pulled-right"
                  }
  
                  if(data.align == "right") {
                    leftAlign = "column is-4 is-pulled-right"
                    rightAlign = "column is-8 is-pulled-left"
                  }
  
                  if(data.align == "center") {
                    leftAlign = "column is-12"
                    rightAlign = "column is-12"
                  }
                  return <>
                  <section className={index %2 == 0 ? "section alternate" : "section"}>
                  <div className="container">
                    <div className="columns is-mobile is-centered">
                      <div className="column is-8">
                        <div className={leftAlign}>
                          <figure className="image is-256x256">
                            <img src={require(`../images/${data.image}`)} alt="chat-app" />
                          </figure>
                        </div>
                        <div className={rightAlign}>
                          <h1 className="title has-text-left extra-space">
                            <a className="is-text has-text-black" href={data.link}>{data.heading}</a>
                          </h1>
                          <p className="bd-notification is-primary has-text-left is-size-5">{data.mainDesc}</p>
                          <p className="bd-notification is-primary has-text-left is-size-5">{data.secondDesc}</p>
                          <div className="columns is-gap extra-space">
                            {
                              data.technologies.map((data,index) => {
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
                            data.contribution.map((data,index) => {
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
            </>
                        })
            }
            </>
        );
    }
}
