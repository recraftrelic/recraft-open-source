import React from 'react';
import dynamicData from './dynamic.json';
import './style/App.css';

function App() {
  return (
    <div className="App">
      {
        dynamicData.mainSection.map((data,index) => {
          return <>
            <section className="section" style={{paddingBottom: 0}}>
              <div className="container">
                <p className="level-item ">
                  <figure className="image is-128x128">
                    <img src={require(`./images/${data.logo}`)} alt="logo" />
                  </figure>
                </p>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    <h1 className="title">{data.heading}</h1>
                    <h2 className="subtitle extra-space">
                      {data.description}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </>
        })
      }
      {
        dynamicData.projectSection.map((data,index) => {
          return <>
            <section className="section project" style={{paddingBottom: 50, paddingTop: 10}}>
              <div className="container">
                <p className="level-item has-text-centered">
                  <h1 className="title is-size-1">{data.heading}</h1>
                </p>
              </div>
            </section>
            {
              data.projects.map((data,index) => {
                let leftAlign = "column is-4 is-pulled-left"
                let fullAlign = "column is-8 is-pulled-right"

                if(index %2 == 0) {
                  leftAlign = "column is-4 is-pulled-left"
                  fullAlign = "column is-8 is-pulled-right"
                }

                if(index %2 == 1) {
                  leftAlign = "column is-4 is-pulled-right"
                  fullAlign = "column is-8 is-pulled-left"
                }

                if(index == 2) {
                  leftAlign = "column is-12"
                  fullAlign = "column is-12"
                }
                return <>
                  <section className={index %2 == 0 ? "section alternate" : "section"}>
                    <div className="container">
                      <div className="columns is-mobile is-centered">
                        <div className="column is-8">
                          <div className={leftAlign}>
                            <figure className="image is-256x256">
                              <img src={require(`./images/${data.image}`)} alt="chat-app" />
                            </figure>
                          </div>
                          <div className={fullAlign}>
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
                                        <a href={data.link}><img src={require(`./images/${data.icon}`)} alt="technologies"/></a>
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
                                    <a className="is-text" href="link">{data.link}</a>
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
        })
      }

      {
        dynamicData.teamSection.map((data,index) => {
          return <>
            <section className="section team" style={{paddingTop: 50, paddingBottom: 0}}>
              <div className="container">
                <p className="level-item has-text-centered">
                  <h1 className="title is-size-1">{data.heading}</h1>
                </p>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    {
                      data.teams.map((data,index) => {
                        return <>
                          <div className="column is-4 is-pulled-left">
                            <div className="card">
                              <header className="card-header">
                                <figure className="image is-256x256">
                                  <img src={require(`./images/${data.image}`)} alt="developer" />
                                </figure>
                              </header>
                              <div className="card-content">
                                <div className="content">
                                  <h2 className="sub-title">{data.title}</h2>
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
          </>
        })
      }
    </div>
  );
}

export default App;
